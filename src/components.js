export default (editor, opt = {}) => {
  editor.on('component:selected', (data) => {
      let pn = editor.Panels
      const openSmBtn = pn.getButton('views', 'open-sm');
      openSmBtn && openSmBtn.set('active', 1);
      var gjs_frame = document.getElementsByClassName("gjs-frame")[0]
      var gjs_content = (gjs_frame.contentWindow || gjs_frame.contentDocument);
      if (gjs_content.document) {
          gjs_content = gjs_content.document.body;
      }
      var a_clr = gjs_content.querySelector("a[data-gjs-type='link']")
       if(a_clr != null) {
         a_clr.style.color = 'inherit'
       }
    });
}
