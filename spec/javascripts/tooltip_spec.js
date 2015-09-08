//= require jquery
describe("Tooltip functions", function() {

  it("parses item data into html", function() {

    var itemkey = 'CkAIp-GcvgcSBwgEFbUzhY0d8dNq1R2s05k5HVhG4dkdQ05EUR0QL8oqMIsSON8CQABQElgEYPcCgAFGtQHS-MgVGJWx1qcOUABYAA'
    var apikey = '&apikey=qxthahes9tk2jggb32bqqyv2weyq8nk4';

    var domain = 'https://api.battlenet.com.cn';
    domain = 'https://us.api.battle.net'

    $.ajax({
      type: 'GET',
      // jsonpCallback: "Bnet.D3.Tooltips.parseItemData",
      dataType: 'jsonp',
      url: domain + '/d3/data/item/' + itemkey + '?locale=en_US' + apikey
    }).success(function(data) {
      currentData = data;
      var ejs = new EJS({ text: window.ejsTemplate });
      var html = ejs.render({data: data});
      console.log('tooltip html from item data', html);
    });

  });

});
