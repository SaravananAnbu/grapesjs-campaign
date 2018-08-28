export default (editor, opt={}) => {
  var rte = editor.RichTextEditor;
    rte.remove('link')
    rte.add('link', {
      name:'link',
      icon: `<i class="fa fa-link open-link" onclick="openForm()" aria-hidden="true"></i>
          <div id="linkForm" class="form-popup" onsubmit="submitForm()">
            <input type="text" placeholder="http://example.com" value=""/>
            <button title="Submit" onclick="closeForm()"><i class="fa fa-check" aria-hidden="true"></i></button>
            <button title="Cancel" onclick="closeForm()"><i class="fa fa-times" aria-hidden="true"></i></button>
          </div>`,
      attributes: { title: 'CreateLink' },
      result: (rte, action) => {
        const url = action.btn.lastChild.childNodes[1].value;
        rte.exec('createLink', url)
      }
    });
    function openForm() {
       document.getElementById("linkForm").style.display = "block";
    }
    function closeForm() {
      document.getElementById("linkForm").style.display = "none";
    }
    rte.add('unlink', {
      name: 'unlink',
      icon: '<i class="fa fa-unlink" aria-hidden="true"></i>',
      attributes: {title: 'Unlink'},
      result: rte => rte.exec('unlink')
    });
    rte.add('insertOrderedlist', {
      icon: '<i class="fa fa-list-ol" aria-hidden="true"></i>',
      attributes: {title: 'Insert Ordered list'},
      result: rte => rte.exec('insertOrderedlist')
    });
    rte.add('insertUnorderedList', {
      icon: '<i class="fa fa-list-ul" aria-hidden="true"></i>',
      attributes: {title: 'Insert Unordered list'},
      result: rte => rte.exec('insertUnorderedList')
    });
    rte.add('indent', {
      icon: '<i class="fa fa-indent" aria-hidden="true"></i>',
      attributes: {title: 'indent'},
      result: rte => rte.exec('indent')
    });
    rte.add('outdent', {
      icon: '<i class="fa fa-outdent" aria-hidden="true"></i>',
      attributes: {title: 'Outdent'},
      result: rte => rte.exec('outdent')
    });
    rte.add('subscript', {
      icon: '<i class="fa fa-subscript" aria-hidden="true"></i>',
      attributes: {title: 'Subcript'},
      result: rte => rte.exec('subscript')
    });
    rte.add('superscript', {
      icon: '<i class="fa fa-superscript" aria-hidden="true"></i>',
      attributes: {title: 'Supercript'},
      result: rte => rte.exec('superscript')
    });
    rte.add('custom-vars', {
      icon: `<select class="gjs-field" style="color:#fff;">
    		<option value="">Insert Text</option>
            <option value="[[firstname]]">FirstName</option>
            <option value="[[lastname]]">LastName</option>
            <option value="[[age]]">Age</option>
          </select>`,
      event: 'change',
      result: (rte, action) => rte.insertHTML(action.btn.firstChild.value),
      update: (rte, action) => { action.btn.firstChild.value = "";}
    });
}
