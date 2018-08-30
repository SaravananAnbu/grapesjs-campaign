export default (editor, opt = {}) => {
  editor.on('load', function () {
    var und = 'undo';
    var rdo = 'redo';
    var clrcanvas = 'clean-all';
    var gjs_frame = editor.Canvas.getBody();
    var cmd = editor.Commands;
    cmd.add(und, {
      run: function(editor, sender) {
        sender.set('active', 0);
        editor.UndoManager.undo(1);
      }
    });
    cmd.add(rdo, {
      run: function(editor, sender) {
        sender.set('active', 0);
        editor.UndoManager.redo(1);
      }
    });
    cmd.add(clrcanvas, {
      run: function(editor, sender) {
        sender && sender.set('active',false);
        if(confirm('Are you sure to clean the canvas?')){
          var comps = editor.DomComponents.clear();
          setTimeout(function(){
            localStorage.clear()
          },0)
          editor.addComponents(`<mjml>
              <mj-body>
                  <mj-container>

                  </mj-container>
              </mj-body>
          </mjml>`)
          gjs_frame.querySelector('div[data-type="mj-container"]').style.height = '100%';
        }
      }
    });
  })
}
