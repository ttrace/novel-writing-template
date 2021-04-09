module.exports = [
    // ルール　助詞の連続（タイプミス）
    {
        message: `「$1$2$3」には助詞の連続があります（単純な助詞の連続）`,
        expected: '$1$2',
        tokens: [
            {
                "pos": "名詞",
                "_capture": "$1"
            },{
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$2"
            },{
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「$1$2$3」には助詞の連続があります（係助詞と格助詞の連続）`,
        expected: '$1$2',
        tokens: [
            {
                "pos": "名詞",
                "_capture": "$1"
            },{
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$2"
            },{
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「$1$2$3」には助詞の連続があります（係助詞と格助詞の連続）`,
        expected: '$1$2',
        tokens: [
            {
                "pos": "名詞",
                "_capture": "$1"
            },{
                "surface_form": "が",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },{
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$3"
            }
        ]
    },
    {
        message: `「$1$2$3」には助詞の連続があります（係助詞と格助詞の連続）`,
        expected: '$1$2',
        tokens: [
            {
                "pos": "名詞",
                "_capture": "$1"
            },{
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "_capture": "$2"
            },{
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$3"
            }
        ]
    },
];