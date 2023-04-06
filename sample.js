function system(){
    let target = document.getElementById("target").value;

    var result_list = ['空です'];

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

    // for(var i; i<target; i++){
    //     var n = Math.floor(Math.random()*charactor_list.length);
    //     result_list.push(charactor_list[n]);
    // }

    var n = Math.floor(Math.random()*charactor_list.length);
    // result_list.push(charactor_list[n]);

    document.getElementById("answer").textContent = charactor_list[n];
    // document.getElementById("answer").textContent = result_list;
    document.getElementById("number").textContent = charactor_list.length;

}