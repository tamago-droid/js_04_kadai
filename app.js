$(function(){
     //firebaseのデータベースを使う、リアルタイム通信可のjsコード
     const newPostRef = firebase.database().ref();

    $("#send").on("click", function(){
        // データの塊(オブジェクト)でfirebaseに送信
        newPostRef.push({
            title: $("#title").val(),
            content: $("#content").val(),
        }) 
        // 空白にする
        $("#content").val("");

    });


    // 受信処理
    newPostRef.on("child_added", function (data){
        //ここに保存されたデータが全て入ってくる
        // function (data)のdataにfirebaseのデータが入ってくる    
        let v= data.val();

        // consoleでvのデータを確認
        // console.log(v);

        let t=v.title;
        let c=v.content;

        // consoleでtのデータ確認
        console.log(t);
        
        //#outputへのデータの表示をテンプレートリテラルで作成
        let str=`<div id="ob">
                    <p id="ob_t">${t}</p><p id="ob_c">${c}</p>
                </div>`;

        
        // HTMLにはめ込む
        $("#output").prepend(str);

        //titleに対応したiconを追加
        if(t==="Highlight"){
            $("#ob_t").html('<i class="fa fa-thumbs-o-up fa-3x"></i>')

        }else if(t==="Restaurant"){
            $("#ob_t").html('<i class="fa fa-cutlery fa-3x"></i> ')

        }else if(t==="Cafe"){
            $("#ob_t").html('<i class="fa fa-coffee fa-3x"></i> ')

        }else if(t==="Movie"){
            $("#ob_t").html('<i class="fa fa-youtube-play fa-3x"></i> ')

        }else if(t==="Meet"){
            $("#ob_t").html('<i class="fa fa-child fa-3x"></i> ')

        }else if(t==="Appointment"){
            $("#ob_t").html('<i class="fa fa-suitcase fa-3x"></i> ')

        }else  if(t==="Memo"){
            $("#ob_t").html('<i class="fa fa-pencil-square-o fa-3x"></i> ')
        }
    });
 
});
    