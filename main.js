var app = new Vue({
    el: '#app',
    data: {
        name: 'キマイラ',
        list: [
        { id: 1, name: 'スライム', hp: 100 },
        { id: 2, name: 'ゴブリン', hp: 200 },
        { id: 3, name: 'ドラゴン', hp: 500 }
        ]
    },
    methods: {
        // 削除ボタンをクリックしたときのハンドラ
        doRemove: function(index) {
            // 受け取ったインデックスの位置から1個要素を削除
            this.list.splice(index, 1)
        },
        // 追加ボタンをクリックしたときのハンドラ
        doAdd: function() {
            // リスト内で一番大きいIDを取得
            var max = this.list.reduce(function(a, b) {
                return a > b.id ? a : b.id
            },　0)
            // 新しいモンスターをリストに追加
            this.list.push({
                id: max + 1, // 現在の最大のIDにプラス1してuniqueなIDを作成
                name: this.name, // 現在のフォームの入力値
                hp: 500
            })
        }
    }
})