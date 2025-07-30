let menu=document.getElementById("menu");
let flag=0;

/*when we click reduce the width in left*/
let leftmain=document.getElementById("leftmain");
menu.addEventListener("click",function(){
    if(flag==0){
    leftmain.style.cssText="width:72px;"
        flag++;
    }
    else{
    leftmain.style.cssText="width:256px;"
        flag--;
    } 
})

//when i mousemove on the icon the width wants to increase
leftmain.addEventListener("mouseover",function(){
     leftmain.style.cssText="width:256px";
     inbox_content.style.display="block";
     stareed_content.style.cssText="display:block;display:flex;align-items:center;";
     snozed_content.style.cssText="display:block;display:flex;align-items:center;";
     sent_content.style.cssText="display:block;display:flex;align-items:center;";
     draft_content.style.cssText="display:block;display:flex;align-items:center;";
     more_content.style.cssText="display:block;display:flex;align-items:center";
     number_inbox.style.cssText="display:block;display:flex;align-items:center";
     number_inbox.style.cssText="display=block;display:flex;display:justify-content:center"
     compose.style.cssText="width:140";
     contents_in_leftbox.style.backgroundColor="#d6e2fb";
     content_compose.style.cssText="dispaly:block;display:flex;justify-content:center;align-items:center;"
})
    middle_contentmain.addEventListener("mouseover",function(){
        leftmain.style.cssText="width:72px";
        inbox_content.style.display="none"
        stareed_content.style.display="none"
        snozed_content.style.display="none"
        sent_content.style.display="none"
        draft_content.style.display="none"
        more_content.style.display="none"
        number_inbox.style.display="none"
        contents_in_leftbox.style.backgroundColor="rgb(247,248,252)"
        icon1_inbox.style.cssText="border-radius:50%;background-color:#d6e2fb;"
        compose.style.cssText="width:56px;"
        content_compose.style.display="none"
})

let contentsleft=0;

/*when we click reduce the width in left*/
let content=document.getElementById("content");
    menu.addEventListener("click",function(){
    if(contentsleft == 0){ 
    inbox_content.style.display="none"
    stareed_content.style.display="none"
    snozed_content.style.display="none"
    sent_content.style.display="none"
    draft_content.style.display="none"
    more_content.style.display="none"
    number_inbox.style.display="none"
    contents_in_leftbox.style.backgroundColor="rgb(247,248,252)"
    icon1_inbox.style.cssText="border-radius:50%;background-color:#d6e2fb;"
    compose.style.cssText="width:56px;"
    content_compose.style.display="none"
    console.log("hello")


    console.log("hello")

    contentsleft++;
    }
    else{
        inbox_content.style.display="block";
        stareed_content.style.cssText="display:block;display:flex;align-items:center;";
        snozed_content.style.cssText="display:block;display:flex;align-items:center;";
        sent_content.style.cssText="display:block;display:flex;align-items:center;";
        draft_content.style.cssText="display:block;display:flex;align-items:center;";
        more_content.style.cssText="display:block;display:flex;align-items:center";
        number_inbox.style.cssText="display:block;display:flex;align-items:center";
        number_inbox.style.cssText="display=block;display:flex;display:justify-content:center"
        compose.style.cssText="width:140";
        contents_in_leftbox.style.backgroundColor="#d6e2fb";
        content_compose.style.cssText="dispaly:block;display:flex;justify-content:center;align-items:center;"
        contentsleft--;
        console.log("hello")
    } 
})

























let inputmain_box=document.getElementById("inputmain_box");
// let input_nav=document.getElementById("input_nav");
inputmain_box.addEventListener("click",function(){
inputmain_box.style.cssText="background-color:rgb(255,255,255);box-shadow: 0px 2px 4px 0px lightgrey;"
input_nav.style.cssText="background-color:rgb(255,255,255);"
})


// changing the input box to the normal box when i click on the main
let main =document.getElementById("main");
main.addEventListener("click",function(){ 
inputmain_box.style.cssText="background-color:rgb(235,241,250)";
input_nav.style.cssText="background-color:rgb(235,241,250)";
})

// let  =document.getElementById("main");
menu.addEventListener("click",function(){ 
inputmain_box.style.cssText="background-color:rgb(235,241,250)";
input_nav.style.cssText="background-color:rgb(235,241,250)";
})

let png=document.getElementById("png")
png.addEventListener("click",function(){ 
    inputmain_box.style.cssText="background-color:rgb(235,241,250)";
    input_nav.style.cssText="background-color:rgb(235,241,250)";
    })

 let space_beside_png=document.getElementById("space_beside_png")
 space_beside_png.addEventListener("click",function(){ 
 inputmain_box.style.cssText="background-color:rgb(235,241,250)";
 input_nav.style.cssText="background-color:rgb(235,241,250)";
 })

 let input_beside_space=document.getElementById("input_beside_space")
 input_beside_space.addEventListener("click",function(){ 
 inputmain_box.style.cssText="background-color:rgb(235,241,250)";
 input_nav.style.cssText="background-color:rgb(235,241,250)";
 })


 let  nav_bar_four_profile =document.getElementById("nav_bar_four_profile")
 nav_bar_four_profile.addEventListener("click",function(){ 
 inputmain_box.style.cssText="background-color:rgb(235,241,250)";
 input_nav.style.cssText="background-color:rgb(235,241,250)";
 })



// for form of the more option
let moreoptionicon=document.getElementById("moreoptionicon");
let more_op=0
moreoptionicon.addEventListener("click",function(){
  if(more_op==0){
    content_of_more_option.style.cssText="display:none";
    more_op++;
  }
  else{
    content_of_more_option.style.cssText="display:block";
    more_op--;
   }
})

main.addEventListener("click",function(){
    content_of_more_option.style.cssText="display:none";
})


// input more option greater than leassor than icon 
let icon_g_l=0
let icon_moreoption_size1=document.getElementById("icon_moreoption_size1");
icon_moreoption_size1.addEventListener("click",function(){
if(icon_g_l==0){
    greater_lesser.style.cssText="display:block";
  icon_g_l++;
}
else{
    greater_lesser.style.cssText="display:none";
   icon_g_l--;
}
})


// input more option byte mb,kb icon 

let icon_mb_kb=0
let icon_moreoption_size_two=document.getElementById("icon_moreoption_size_two");
icon_moreoption_size_two.addEventListener("click",function(){
if(icon_mb_kb==0){
    bytes_Kb_Mb.style.cssText="display:block";
  icon_mb_kb++;
}
else{
   bytes_Kb_Mb.style.cssText="display:none";
   icon_mb_kb--;
}
})

//days weeks months in the search
let icon_wek_m_d=0
let icon_moreoption_size_three=document.getElementById("icon_moreoption_size_three");
icon_moreoption_size_three.addEventListener("click",function(){
if(icon_wek_m_d==0){
    days_weeks_months.style.cssText="display:block";
  icon_wek_m_d++;
}
else{
    days_weeks_months.style.cssText="display:none";
   icon_wek_m_d--;
}
})


// mail div 
let icon_mail_p_s=0
let icon_moreoption_size_four=document.getElementById("icon_moreoption_size_four");
icon_moreoption_size_four.addEventListener("click",function(){
if(icon_mail_p_s==0){
    mail_another_div.style.cssText="display:block";
  icon_mail_p_s++;
}
else{
    mail_another_div.style.cssText="display:none";
   icon_mail_p_s--;
}
})































// end of the form


// for support or for the question

let question_support=document.getElementById("support");
// let describing_question_mark=document.getElementById("describing_question_mark")

let support=0;

question_support.addEventListener("click",function(){
    if(support==0){
    describing_question_mark.style.display="block";
    support++;
    }
    else{
        describing_question_mark.style.display="none";
        support--;
    }
})

// for googleapps describing
let google_app=0
 let googleicons =document.getElementById("googleicons");
 googleicons.addEventListener("click",function(){
    if(google_app==0){
        google_describing.style.cssText="display:none";
        google_app++;
    }
    else{
        google_describing.style.cssText="display:block";
        google_app--;
 
    }

 })


 //main content
 let check=0;
 let checkbox_m_m=document.getElementById("checkbox_m_m")
 checkbox_m_m.addEventListener("click",function(){
     if(check==0){
        second_hidden_div.style.cssText=  "display:inline-block; display:flex ";
        middle_checkbox_and_selectionicon.style.cssText="background-color: rgb(227,229,233);border:1px solid rgb(227,229,233); border-radius:2px;"        
        archiv_icons_box.style.display="block";  
        refresh_icons_box.style.display="none"; 
        reportspam_smallbox.style.display="block";
        moreicon_smallboox.style.display="none";  
        deleat_box_box.style.display="block"; 
        hr_in_clicked.style.display="block"; 
        mark_as_read.style.display="block"; 
        move_to_and_more_option.style.display="block"; 
        // chekk_boxx_in_mm.style.css="backgroundColor:rgb(227,229,233)";
        // _option.style.display="block"; 
        check++;
     }
     else{
        second_hidden_div.style.cssText=" display:none;" ;
        middle_checkbox_and_selectionicon.style.cssText="background-color: rgb(255,255,255);rgb(227,229,233);border:1px solid rgb(227,229,233); border-radius:2px;" 
        archiv_icons_box.style.cssText="display:none";  
        refresh_icons_box.style.display="block"; 
        reportspam_smallbox.style.display="none";
        moreicon_smallboox.style.display="block";  
        deleat_box_box.style.display="none"; 
        hr_in_clicked.style.display="none"; 
        mark_as_read.style.display="none"; 
        move_to_and_more_option.style.display="none"; 
        check--;
     }
 })

 let primary=document.getElementById("primary");
 primary.addEventListener("click",function(){
        inobx_icon_in_promotions.style.cssText="color:#333;";
        content_of_promotion.style.cssText="color:#333";
        inobx_icon_in_primary.style.cssText="color:#0b57d0"
        content_of_primary.style.cssText="color:#0b57d0";
        inobx_icon_in_social.style.cssText="color:#333"
        content_of_social.style.cssText="color:#333";
    
 })

 let promotions=document.getElementById("promotions");
 promotions.addEventListener("click",function(){
    inobx_icon_in_promotions.style.cssText="color:#0b57d0;";
    content_of_promotion.style.cssText="color:#0b57d0;";
    inobx_icon_in_primary.style.cssText="color:#333"
    content_of_primary.style.cssText="color:#333";
    inobx_icon_in_social.style.cssText="color:#333"
    content_of_social.style.cssText="color:#333";

 })



//  let soc=0
 let social=document.getElementById("social");
 social.addEventListener("click",function(){
        inobx_icon_in_promotions.style.cssText="color:#333;";
        content_of_promotion.style.cssText="color:#333";
        inobx_icon_in_primary.style.cssText="color:#333"
        content_of_primary.style.cssText="color:#333";
        inobx_icon_in_social.style.cssText="color:#0b57d0"
        content_of_social.style.cssText="color:#0b57d0";

 })



 // when wwe click the each box of the checkbox the icons must be extended.
 let each_box=0
 let each_checkbox=document.getElementsByClassName("lknckbz")
 each_checkbox.addEventListener("click",function(){
     if(each_box==0){
        // second_hidden_div.style.cssText=  "display:inline-block; display:flex ";
        // middle_checkbox_and_selectionicon.style.cssText="background-color: rgb(227,229,233);border:1px solid rgb(227,229,233); border-radius:2px;"        
        archiv_icons_box.style.display="block";  
        refresh_icons_box.style.display="none"; 
        reportspam_smallbox.style.display="block";
        moreicon_smallboox.style.display="none";  
        deleat_box_box.style.display="block"; 
        hr_in_clicked.style.display="block"; 
        mark_as_read.style.display="block"; 
        move_to_and_more_option.style.display="block"; 
        // chekk_boxx_in_mm.style.css="backgroundColor:rgb(227,229,233)";
        // _option.style.display="block"; 
        each_box++;
     }
     else{
        // second_hidden_div.style.cssText=" display:none;" ;
        // middle_checkbox_and_selectionicon.style.cssText="background-color: rgb(255,255,255);rgb(227,229,233);border:1px solid rgb(227,229,233); border-radius:2px;" 
        archiv_icons_box.style.cssText="display:none";  
        refresh_icons_box.style.display="block"; 
        reportspam_smallbox.style.display="none";
        moreicon_smallboox.style.display="block";  
        deleat_box_box.style.display="none"; 
        hr_in_clicked.style.display="none"; 
        mark_as_read.style.display="none"; 
        move_to_and_more_option.style.display="none"; 
        each_box--;
     }
 })







// for middle box
//when i click on the box

checkk_boxx_in_mm.addEventListener("click()",function(){
    middle_checkbox_and_selectionicon.style.cssText="border:1px solid black;";
})