export default (editor, config = {}) => {
  editor.on('load', function () {

    let blockManager = editor.BlockManager;

    //Adding extra columns
    blockManager.add('mj-3/7-columns', {
        label: '2 Columns (3/7)',
        content: `<mj-section>
            <mj-column width="30%"><mj-text>Content 1</mj-text></mj-column>
            <mj-column width="70%"><mj-text>Content 2</mj-text></mj-column>
          </mj-section>`,
        attributes: { class: 'gjs-fonts gjs-block gjs-f-b37' },
      });
      blockManager.add('mj-4-columns', {
        label: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="225.04748603351953 224.6675977653632 184.93575418994413 167.85195530726253" width="50.44" height="40.35"><defs><path d="M226.55 226.17L263.78 226.17L263.78 389.52L226.55 389.52L226.55 226.17Z" id="f1p8cWUH6W"></path><path d="M273.78 226.17L311.01 226.17L311.01 389.52L273.78 389.52L273.78 226.17Z" id="apZRFVo0m"></path><path d="M321.77 226.17L358.99 226.17L358.99 389.52L321.77 389.52L321.77 226.17Z" id="d32mJveFU4"></path><path d="M369.75 226.17L406.98 226.17L406.98 389.52L369.75 389.52L369.75 226.17Z" id="c22d8TTKPg"></path></defs><g><g><g><use xlink:href="#f1p8cWUH6W" opacity="1" fill-opacity="0" stroke="#dddddd" stroke-width="8" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#apZRFVo0m" opacity="1" fill-opacity="0" stroke="#dddddd" stroke-width="8" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#d32mJveFU4" opacity="1" fill-opacity="0" stroke="#dddddd" stroke-width="8" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#c22d8TTKPg" opacity="1" fill-opacity="0" stroke="#dddddd" stroke-width="8" stroke-opacity="1"></use></g></g></g></svg> <div class="gjs-block-label" style="padding-top: 10px">4 Columns</div> `,
        content: `<mj-section>
            <mj-column><mj-text>Content 1</mj-text></mj-column>
            <mj-column><mj-text>Content 2</mj-text></mj-column>
            <mj-column><mj-text>Content 3</mj-text></mj-column>
            <mj-column><mj-text>Content 4</mj-text></mj-column>
          </mj-section>`,
        attributes: { class: 'gjs-fonts gjs-block' },
      });
      
      // Render blocks in order
      blockManager.render([
        blockManager.get('mj-1-column'),
        blockManager.get('mj-2-columns'),
        blockManager.get('mj-3/7-columns'),
        blockManager.get('mj-3-columns'),
        blockManager.get('mj-4-columns'),
        blockManager.get('mj-text'),
        blockManager.get('mj-button'),
        blockManager.get('mj-image'),
        blockManager.get('link'),
        blockManager.get('mj-divider'),
        blockManager.get('mj-social'),
        blockManager.get('mj-spacer'),
      ]);
  })
}
