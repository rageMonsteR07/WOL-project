function show(){
    let photo = document.pictures.photo.value;
    let img1="";
    let img2="";
    let img3="";
    let img4="";

    if(photo==="Street Photography"){
        img1="https://scontent.fdel1-1.fna.fbcdn.net/v/t1.0-9/p720x720/91623460_109363767393005_3793710549171175424_o.jpg?_nc_cat=110&_nc_sid=110474&_nc_ohc=ab3bTNRft-4AX8lj4pQ&_nc_ht=scontent.fdel1-1.fna&_nc_tp=6&oh=8a44d495069a3dce686caee9741a3703&oe=5EB31C7F";
        img2="https://scontent.fdel1-2.fna.fbcdn.net/v/t1.0-9/92356627_109362787393103_6902179652043800576_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=OM8XsKfgIa8AX9z78xY&_nc_ht=scontent.fdel1-2.fna&oh=46669a4e672c326336276e0b6778d5ea&oe=5EB1799B";
        img3="https://scontent.fdel1-2.fna.fbcdn.net/v/t1.0-9/s960x960/92363079_109845610678154_6262735609526222848_o.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=SMZ6DCfL3-oAX-lDoZy&_nc_ht=scontent.fdel1-2.fna&_nc_tp=7&oh=16a93e264f6ae11baeb678e5f7d67dde&oe=5EB2190F";
        img4="https://scontent.fdel1-4.fna.fbcdn.net/v/t1.0-9/92411962_109389990723716_6803122502013812736_n.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_ohc=H2kZuCbv57YAX-Z0Oqd&_nc_ht=scontent.fdel1-4.fna&oh=19258c4a16702bb2de4ea0f2d973a0e8&oe=5EB43B8D";
    }
    if(photo==="Landscapes"){
        img1="https://scontent.fdel1-2.fna.fbcdn.net/v/t1.0-0/p206x206/92275428_109390044057044_200480393248374784_n.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=5Nfd2AkKqU8AX8Negil&_nc_ht=scontent.fdel1-2.fna&_nc_tp=6&oh=578d4906ee6998a289261c0aa941eb36&oe=5EB1CA62";
        img2="https://scontent.fdel1-3.fna.fbcdn.net/v/t1.0-9/91894572_109389970723718_8542531476040712192_n.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=Ebv5uZdgLBMAX822Tyq&_nc_ht=scontent.fdel1-3.fna&oh=9c4865790dce5d79c838c00379ff4c0b&oe=5EB377DE";    
        img3="https://scontent.fdel1-3.fna.fbcdn.net/v/t1.0-9/s960x960/91795687_109363197393062_8526164072935194624_o.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=pBmreWY9s4IAX940T7O&_nc_ht=scontent.fdel1-3.fna&_nc_tp=7&oh=f771b3dec75a83c432ff11a9bf00c9b1&oe=5EB23E80";
        img4="https://scontent.fdel1-3.fna.fbcdn.net/v/t1.0-0/p180x540/91907018_109363824059666_7140911779944595456_o.jpg?_nc_cat=108&_nc_sid=110474&_nc_ohc=Dha3gChnFrQAX9Ynyoh&_nc_ht=scontent.fdel1-3.fna&_nc_tp=6&oh=e30836a14e3b35ea9ec422ea7df925fe&oe=5EB53582";
    }
    if(photo==="Still Life Photograghy"){
        img1="https://scontent.fdel1-4.fna.fbcdn.net/v/t1.0-9/s960x960/91647053_109818127347569_5433179465330982912_o.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_ohc=G4Wt7WYzOZsAX-YUM73&_nc_ht=scontent.fdel1-4.fna&_nc_tp=7&oh=4bdb0e2687a280e0c0e20456b05b5d22&oe=5EB3643C";
        img2="https://scontent.fdel1-4.fna.fbcdn.net/v/t1.0-9/91757853_109390070723708_1603181785447923712_n.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_ohc=3HlkmeJlDJMAX-dVevw&_nc_ht=scontent.fdel1-4.fna&oh=cbb89dadc60a7df19ee818aaa6ab9fb7&oe=5EB43991";
        img3="https://scontent.fdel1-3.fna.fbcdn.net/v/t1.0-9/p960x960/91626291_109363760726339_3240663596333531136_o.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=nCUL1u2AJZ0AX_xtb-L&_nc_ht=scontent.fdel1-3.fna&_nc_tp=6&oh=58d569da1abcdb60908644fdcd04a73e&oe=5EB2E721";
        img4="https://scontent.fdel1-2.fna.fbcdn.net/v/t1.0-9/s960x960/92327731_109362524059796_6895615975647870976_o.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=kHt0pg2-ct0AX8PM66e&_nc_ht=scontent.fdel1-2.fna&_nc_tp=7&oh=9d8048b2ee67103a780ea4e98625beba&oe=5EB39F71";
    }
    if(photo==="Flatlay Photography"){
        img1="https://scontent.fdel1-1.fna.fbcdn.net/v/t1.0-9/s960x960/92242594_109816930681022_2486785355714396160_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=Yx-QVliJP24AX8d4WTp&_nc_ht=scontent.fdel1-1.fna&_nc_tp=7&oh=133225fd69258cf13acf891b5c573834&oe=5EB3DCD4";
        img2="https://scontent.fdel1-3.fna.fbcdn.net/v/t1.0-9/91544534_109390867390295_1117707583143018496_n.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=i4BxalffXcMAX_PhpAD&_nc_ht=scontent.fdel1-3.fna&oh=56a302feac8d3e61306fd805ee39a722&oe=5EB3E89C";
        img3="https://scontent.fdel1-4.fna.fbcdn.net/v/t1.0-9/91757853_109390070723708_1603181785447923712_n.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_ohc=3HlkmeJlDJMAX-dVevw&_nc_ht=scontent.fdel1-4.fna&oh=cbb89dadc60a7df19ee818aaa6ab9fb7&oe=5EB43991";
        img4="";
    }



    document.getElementById("after-submit").style.visibility="visible";
    document.getElementById("image1").src=img1;
    document.getElementById("image2").src=img2;
    document.getElementById("image3").src=img3;
    document.getElementById("image4").src=img4;

}