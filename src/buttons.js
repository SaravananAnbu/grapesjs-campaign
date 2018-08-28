import grapesjs from 'grapesjs';

export default (editor, opt = {}) => {

  editor.on('load', function () {
    // Customizing Panels
    var obl = 'open-blocks';
    var osm = 'open-sm';
    let panelManager = editor.Panels;
    let styleManager = editor.StyleManager;

    //removing and Adding Buttons
    panelManager.removeButton('views', 'open-layers');
    panelManager.removeButton('views', 'open-blocks');
    panelManager.removeButton('views', 'open-sm');

    panelManager.addButton('views', {
      id: osm,
      className: 'p-50',
      command: osm,
      active: true,
      attributes: { title: 'Open Style Manager'},
      label: '<small>Styles</small>',
    });
    panelManager.addButton('views',{
      id: obl,
      className: 'p-50',
      command: obl,
      active: true,
      attributes: { title: 'Open Blocks' },
      label: '<small>Content</small>',
    });


    var $ = grapesjs.$;
    var openTmBtn = panelManager.getButton('views', 'open-tm');
      openTmBtn && openTmBtn.set('active', true  );
    var openSm = panelManager.getButton('views', 'open-sm');
      openSm && openSm.set('active', true);

    // Remove 'open-tm' button in panels
    panelManager.removeButton('views', 'open-tm');

    // Adding settings in StyleManager
    var traitsSector = $('<div class="gjs-sm-sector no-select">'+
        '<div class="gjs-sm-title"><span class="icon-settings fa fa-cog"></span> Settings</div>' +
          '<div class="gjs-sm-properties" style="display: block;"></div></div>');
    var traitsProps = traitsSector.find('.gjs-sm-properties');
        traitsProps.append($('.gjs-trt-traits'));
        $('.gjs-sm-sectors').before(traitsSector);

    //Set default sectors active on load
    var openBl = panelManager.getButton('views', 'open-blocks');
    openBl && openBl.set('active', 1);
    var DimensionSector = styleManager.getSector('Dimension')
    DimensionSector && DimensionSector.set('open', true);
    var TypographySector = styleManager.getSector('Typography')
    TypographySector && TypographySector.set('open', true);
    var DecorationSector = styleManager.getSector('Decorations')
    DecorationSector && DecorationSector.set('open', true);

    //Adding Heading h1-h6 ion Typography
      styleManager.addProperty('Typography', {
        name: 'Heading',
        type: 'select',
        property: 'font-size',
        defaults: 'choose',
        options: [
          {value: '36px', name: 'h1'},
          {value: '30px', name: 'h2'},
          {value: '24px', name: 'h3'},
          {value: '20px', name: 'h4'},
          {value: '18px', name: 'h5'},
          {value: '16px', name: 'h6'},
        ]
      });
  });

}
