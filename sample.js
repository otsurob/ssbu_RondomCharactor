function system(){
    let target = document.getElementById("target").value;

    var result1_list = [];
    var result2_list = [];

    var DLC1 = document.selectList.charactor[0];
    var DLC2 = document.selectList.charactor[1];
    var Mii = document.selectList.charactor[2];

    var charactor_list = 
    ['マリオ','ドンキーコング','リンク','サムス/ダークサムス','ヨッシー','カービィ','フォックス','ピカチュウ','ルイージ',
    'ネス','キャプテン・ファルコン','プリン','ピーチ/デイジー','クッパ','アイスクライマー','シーク','ゼルダ','ドクターマリオ','ピチュー',
    'ファルコ','マルス','ルキナ','こどもリンク','ガノンドロフ','ミュウツー','ロイ','クロム','Mr.ゲーム&ウォッチ','メタナイト',
    'ピット・ブラックピット','ゼロスーツサムス','ワリオ','スネーク','アイク','ポケモントレーナー','ディディーコング','リュカ','ソニック','デデデ',
    'ピクミン&オリマー','ルカリオ','ロボット','トゥーンリンク','ウルフ','むらびと','ロックマン','Wii-Fit トレーナー','ロゼッタ&チコ','リトルマック',
    'ゲッコウガ','パルテナ','パックマン','ルフレ','シュルク','クッパJr','ダックハント','リュウ','ケン','クラウド',
    'カムイ','ベヨネッタ','インクリング','リドリー','シモン/リヒター','キングクルール','しずえ','ガオガエン','パックンフラワー'];

    var DLC1_list = ['ジョーカー','勇者','バンジョー&カズーイ','テリー','ベレス/ベレト'];
    var DLC2_list = ['ミェンミェン','スティーブ','セフィロス','ホムラ・ヒカリ','カズヤ','ソラ'];
    var Mii_list = ['格闘Mii','剣術Mii','射撃Mii'];

    if(DLC1.checked){
        charactor_list = charactor_list.concat(DLC1_list);
    }
    if(DLC2.checked){
        charactor_list = charactor_list.concat(DLC2_list);
    }
    if(Mii.checked){
        charactor_list = charactor_list.concat(Mii_list);
    }

    var first_list = randf(target, charactor_list.length);
    var second_list = randf(target, charactor_list.length);

    for(var i=0; i<target; i++){
        result1_list.push(charactor_list[first_list[i]]);
        result2_list.push(charactor_list[second_list[i]]);
    }

    document.getElementById("answer1").textContent = "Team A : " + result1_list;
    document.getElementById("answer2").textContent = "Team B : " + result2_list;

}

function randf(x, list_size){
    rand_list = [];
    while(rand_list.length!=x){
        var n = Math.floor(Math.random()*list_size);
        if(!rand_list.includes(n)){
            rand_list.push(n);
        }
    }
    return rand_list;
}