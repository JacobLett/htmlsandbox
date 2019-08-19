var videoRowContent;
function loadCustomerVideos(vrTitle,wistiaID1,wistiaID2,wistiaID3,wistiaID4) {
    //place your code here, the scripts are all loaded
      var numColumns = "two";
      var columnClass ="is-6-tablet";
      var columnLast1 = "";
      var columnLast2 = "";
      var columnLast3 = "";
      var columnLast4 = "";
      var titleDisplay = "none";
      if (vrTitle) {
        titleDisplay = "block";
      }

      // load wistia scripts
      document.getElementsByTagName("head")[0].insertAdjacentHTML(
        "beforeend",
        "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/JacobLett/htmlsandbox/videoRow/video-row.css\" />");
        
        
      scriptw = "https://fast.wistia.com/embed/medias/"+wistiaID4+".jsonp";
      
      if (wistiaID1) {
        script1 = "https://fast.wistia.com/embed/medias/"+wistiaID1+".jsonp";
      }
      if (wistiaID2) {
        script2 = "https://fast.wistia.com/embed/medias/"+wistiaID2+".jsonp";
        columnLast2 = " last";
      }
      if (wistiaID3) {
        script3 = "https://fast.wistia.com/embed/medias/"+wistiaID3+".jsonp";
        numColumns = "three";
        columnClass ="is-4-tablet";
        columnLast2 = "";
        columnLast3 = " last";
      }
      if (wistiaID4) {
        script4 = "https://fast.wistia.com/embed/medias/"+wistiaID4+".jsonp";
        numColumns = "four";
        columnClass ="is-3-tablet";
        columnLast3 = "";

      }

      
      var httpRequest = new XMLHttpRequest()
      httpRequest.onreadystatechange = function (data) {
      // code
        





        document.getElementById('videoRow').innerHTML = videoRowContent;

      }
      //httpRequest.open('GET', script1)
      httpRequest.open('GET', script1)
      httpRequest.open('GET', script2)
      if (wistiaID3) {
        httpRequest.open('GET', script3)
      }
      if (wistiaID4) {
        httpRequest.open('GET', script4)
      }
      httpRequest.send()



   


      if (wistiaID3 == '' && wistiaID4 == '') {
          

   
        videoRowContent = `
        <div class="container video-row">
            <h2 id="vrTitle" style="display:`+titleDisplay+`">`+vrTitle+`</h2>
            <div class="two columns">
                <div class="column col is-mobile is-12-mobile `+columnClass+`">
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_`+wistiaID1+` popover=true popoverAnimateThumbnail=false videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>
                </div>
                <div class="column col is-mobile is-12-mobile `+columnClass+`">
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_`+wistiaID2+` popover=true popoverAnimateThumbnail=false videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>
                </div>
            </div>
        </div>
        `;
  
      } else if (wistiaID3 && wistiaID4 == '') {
  
  
        videoRowContent = `
        <div class="container video-row">
            <h2 id="vrTitle" style="display:`+titleDisplay+`">`+vrTitle+`</h2>
            <div class="three columns">
                <div class="column col is-mobile is-12-mobile `+columnClass+`">
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_`+wistiaID1+` popover=true popoverAnimateThumbnail=false videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>
                </div>
                <div class="column col is-mobile is-12-mobile `+columnClass+`">
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_`+wistiaID2+` popover=true popoverAnimateThumbnail=false videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>
                </div>
                <div class="column col is-mobile is-12-mobile `+columnClass+`">
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_`+wistiaID3+` popover=true popoverAnimateThumbnail=false videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>
                </div>
            </div>
        </div>
        `;
  
      } else {
  
  
        videoRowContent = `
        <div class="container video-row">
            <h2 id="vrTitle" style="display:`+titleDisplay+`">`+vrTitle+`</h2>
            <div class="four columns">
                <div class="column col is-mobile is-12-mobile `+columnClass+`">
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_`+wistiaID1+` popover=true popoverAnimateThumbnail=false videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>
                </div>
                <div class="column col is-mobile is-12-mobile `+columnClass+`">
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_`+wistiaID2+` popover=true popoverAnimateThumbnail=false videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>
                </div>
                <div class="column col is-mobile is-12-mobile `+columnClass+`">
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_`+wistiaID3+` popover=true popoverAnimateThumbnail=false videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>
                </div>
                <div class="column col is-mobile is-12-mobile `+columnClass+`">
                  <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><span class="wistia_embed wistia_async_`+wistiaID4+` popover=true popoverAnimateThumbnail=false videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span></div></div>
                </div>
            </div>
        </div>
        `;
  
      }
  
  
  


// End Function
}