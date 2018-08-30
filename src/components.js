export default (editor, opt = {}) => {
  editor.on('component:selected', (data) => {
      let pn = editor.Panels
      const openSmBtn = pn.getButton('views', 'open-sm');
      openSmBtn && openSmBtn.set('active', 1);
      var gjs_frame = editor.Canvas.getBody()
      var a_clr = gjs_frame.querySelector("a[data-gjs-type='link']")
       if(a_clr != null) {
         a_clr.style.color = 'inherit'
       }
    });
}
