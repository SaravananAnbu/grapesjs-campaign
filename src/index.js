import grapesjs from 'grapesjs';

export default grapesjs.plugins.add('gjs-campaign', (editor, opts = {}) => {
  const opt = { ...opts };
  console.log('editor', editor);
  require('./buttons').default(editor, opt);
  require('./blocks').default(editor, opt);
  require('./rte').default(editor, opt);
  require('./commands').default(editor, opt);
  require('./components').default(editor, opt);
});
