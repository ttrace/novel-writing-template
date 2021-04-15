//利用するプラグイン
var gulp = require("gulp");
var concat = require("gulp-concat"); //結合
var foreach = require('gulp-foreach'); //フォルダごとの処理を行うために
var header = require('gulp-header');
var gulpif = require('gulp-if');
var order = require("gulp-order");
var countStat = require("gulp-count-stat");
var folderspath = ['Draft/*/**/'];
var documentspath = ['Draft/*/**/*.txt'];

var del = require('del');// 削除コマンド
var sectionstar = "\n　　　＊\n\n";

gulp.task('cleaning', function(){
    return del('tmp/*.txt');
});

gulp.task('chapter', function(){
    var chapterNumber = 0;
    return gulp.src(folderspath)
        .pipe(order([
            '*/'
        ]))
        .pipe(foreach(function(stream, file){
            chapterNumber ++;
            var chapterZeroPadding = ("000" + chapterNumber).slice( -3 );
            console.log(file.path, chapterNumber);
            var textfiles = file.path + '/*.txt';
            var chaptername = file.basename;
            return gulp.src( textfiles )
                .pipe(concat( chapterZeroPadding + '-' + chaptername +'.txt'))
                .pipe(gulpif( chapterNumber >= 2, header(sectionstar)))
                .pipe(gulp.dest('tmp/'));
        }));
});

gulp.task('novel', function(){
    return gulp.src('tmp/*.txt')
        .pipe(order([
            'tmp/*.txt'
        ]))
        .pipe(concat('novel.txt'))
        .pipe(gulp.dest('publish/'));
});

gulp.task('countstat', function(){
    return gulp.src( 'tmp/*.txt' )
        .pipe(countStat({ words: false, showDir: false }));
});

gulp.task('watch', function(){
    gulp.watch(
        ['Draft/**/', 'Draft/**/*.txt'],
        gulp.series('cleaning', 'chapter', 'countstat', 'novel')
    );
});

gulp.task('default', gulp.task('watch'));
