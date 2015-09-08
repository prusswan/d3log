if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(b) {
    var a = this.length >>> 0;
    var c = Number(arguments[1]) || 0;
    c = (c < 0) ? Math.ceil(c) : Math.floor(c);
    if (c < 0) {
      c += a;
    }
    for (; c < a; c++) {
      if (c in this && this[c] === b) {
        return c;
      }
    }
    return -1;
  };
}
(function() {
  window.getJSONP || (window.getJSONP = function(c, j) {
    if (!c) {
      return;
    }
    var i = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    var g = Math.floor(Math.random() * 10);
    var f = Math.floor(Math.random() * 10);
    var e = Math.floor(Math.random() * 10);
    var d = "getJSONP" + (new Date().getTime());
    var k = "getJSONP." + d;
    if (c.indexOf("?") === -1) {
      c += "?callback=" + k;
    } else {
      c += "&callback=" + k;
    }
    var h = document.createElement("script");
    getJSONP[d] = function(l) {
      try {
        j && j(l);
      } catch (l) {} finally {
        h.parentNode.removeChild(h);
      }
    };
    h.src = c;
    document.getElementsByTagName("head")[0].appendChild(h);
  });

  function a(c) {
    this.init(c);
  }
  var b = "<%# '\u903B\u8F91\u5224\u65AD\u90FD\u5199\u5728\u8FD9\u91CC'%><% var mediaBase = 'http://content.battlenet.com.cn/d3/icons-zh-cn/items/',slotSet = {'left-hand':   '\u5355\u624B','right-hand':  '\u526F\u624B','hand':        '\u624B\u90E8','waist':       '\u8170\u90E8','neck':        '\u62A4\u7B26','left-finger': '\u624B\u6307','head':        '\u5934\u90E8','chest':       '\u80F8\u90E8','feet':        '\u811A\u90E8','shoulder':    '\u80A9\u90E8','legs':        '\u817F\u90E8','bracers':     '\u624B\u8155'},disColor = data.displayColor,elType = data.elementalType,itemIco = mediaBase + 'large/' + data.icon + '.png',itemSharp = 'default',_dps = '',_isShield = false,_minDamage = null,_atackSpeed = null,_maxDamage = null,slot = slotSet[data.slots[0]],_primary = data.attributes.primary,_secondary = data.attributes.secondary,_passive = data.attributes.passive,_gems = data.gems,_sockets = data.attributesRaw.Sockets ? data.attributesRaw.Sockets.max : 0;if(data.dps){_dps = Math.round(data.dps.max*100)/100;_minDamage = Math.round(data.minDamage.max);_maxDamage = Math.round(data.maxDamage.max);_atackSpeed = Math.round(data.attacksPerSecond.max*100)/100;_atackSpeed = _atackSpeed.toFixed(2);}var slot = slotSet[data.slots[0]];if(data.type.twoHanded){slot = '\u53CC\u624B'}if(data.slots[0] == 'chest'){itemSharp = 'big';}else if(data.slots[0] == 'waist' || data.slots[0] == 'neck' || data.slots[0] == 'left-finger'){itemSharp = 'square';}var _primary = data.attributes.primary,_secondary = data.attributes.secondary,_passive = data.attributes.passive,_gems = data.gems,_sockets = data.attributesRaw.Sockets ? data.attributesRaw.Sockets.max : 0;if(data.type.id == 'Shield' || data.type.id == 'CrusaderShield' ){_isShield = true;}%><div class='d3-tooltip d3-tooltip-item'><div class='tooltip-head tooltip-head-<%= disColor%>'><h3 class='d3-color-<%= disColor%>'><%= data.name%></h3></div><div class='tooltip-body effect-bg effect-bg-<%= elType%>'><span class='d3-icon d3-icon-item d3-icon-item-large  d3-icon-item-<%= disColor%>'><span class='icon-item-gradient'><span class='icon-item-inner icon-item-<%= itemSharp %>' style='background-image: url(<%= itemIco %>);'></span></span></span><div class='d3-item-properties'><ul class='item-type-right'><li class='item-slot'><%= slot %></li></ul><ul class='item-type'><li><span class='d3-color-<%= disColor%>'><%= data.typeName %></span></li></ul><%# '\u5982\u679C_isShield\u5B58\u5728\uFF0C\u8BF4\u660E\u662F\u76FE\u724C' %><% if(_isShield){%><ul class='item-armor-weapon item-armor-shield'><li><p><%var _blockChancetext = data.blockChance.replace(/\u683C\u6321\u51E0\u7387/g,'').replace(/([+-]*[\d.]+|%)/g,'<span class=value>$1</span>')%><%= _blockChancetext %><span class='d3-color-FF888888'>\u683C\u6321\u51E0\u7387</span></p></li><li><p><span class='value'>17064</span>\u2013<span class='value'>21626</span><span class='d3-color-FF888888'>\u683C\u6321\u503C</span></p></li></ul><%}%><%# '\u5982\u679Cdps\u5B58\u5728\uFF0C\u8BF4\u660E\u662F\u6B66\u5668' %><% if(data.dps){ %><ul class='item-armor-weapon item-weapon-dps'><li class='big'><span class='value'><%= _dps %></span></li><li>\u6BCF\u79D2\u4F24\u5BB3</li></ul><ul class='item-armor-weapon item-weapon-damage'><li><p><span class='value'><%= _minDamage %></span>\u2013<span class='value'><%= _maxDamage %></span><span class='d3-color-FF888888'>\u70B9\u4F24\u5BB3</span></p></li><li><p><span class='d3-color-FF888888'>\u6BCF\u79D2\u653B\u51FB\u6B21\u6570</span>\uFF1A<span class='value'><%= _atackSpeed %></span></p></li></ul><% }%><%# '\u82E5\u62A4\u7532\u5B58\u5728\uFF0C\u8BF4\u660E\u662F\u975E\u6B66\u5668'%><% if(data.armor){%><ul class='item-armor-weapon item-armor-armor'><li class='big'><p><span class='value'><%= data.armor.max %></span></p></li><li>\u62A4\u7532\u503C</li></ul><% }%><div class='item-before-effects'></div><ul class='item-effects'><p class='item-property-category'>\u4E3B\u8981\u5C5E\u6027</p><%# '\u4E3B\u8981\u5C5E\u6027' %><% for(var i = 0 ; i < _primary.length ; i ++){%><li class='d3-color-<%= _primary[i].color %> d3-item-property-<%= _primary[i].affixType %>'><p><% var _primarytext = _primary[i].text.replace(/([+-]*[\d.]+|%)/g,'<span class=value>$1</span>')%><%= _primarytext %></p></li><%}%><p class='item-property-category'>\u6B21\u8981\u5C5E\u6027</p><% for(var i = 0 ; i < _secondary.length ; i ++){%><li class='d3-color-<%= _secondary[i].color %> d3-item-property-<%= _secondary[i].affixType %>'><p><% var _secondarytext = _secondary[i].text.replace(/([+-]*[\d.]+|%)/g,'<span class=value>$1</span>')%><%= _secondarytext %></p></li><%}%><%# '\u7269\u54C1\u7279\u6548' %><% if(_passive){for(var i = 0 ; i < _passive.length ; i ++){%><li class='d3-color-<%= _passive[i].color %> d3-item-property-<%= _passive[i].affixType %>'><p><% var _passivetext = _passive[i].text.replace(/([+-]*[\d.]+|%)/g,'<span class=value>$1</span>')%><%= _passivetext %></p></li><%}}%><%# '\u9576\u5D4C\u5B9D\u77F3' %><% if(_sockets){%><% for(var ii = 0 ; ii < _sockets ; ii ++){var _gem = _gems[ii];if(_gem){if(_gem.isGem){ var _gemIco = mediaBase + 'small/' + _gem.item.icon + '.png';%><li class='d3-color-white full-socket'><img class='gem' src='<%= _gemIco %>'><% var _gemPrimary = _gem.attributes.primary;for(var j = 0 ; j < _gemPrimary.length ; j ++){%><span class='socket-effect'><%= _gemPrimary[j].text %></span><%}%><% var _gemsecondary = _gem.attributes.secondary;for(var j = 0 ; j < _gemsecondary.length ; j ++){%><span class='socket-effect'><%= _gemsecondary[j].text %></span><%}%><% var _gempassive = _gem.attributes.passive;for(var j = 0 ; j < _gempassive.length ; j ++){%><span class='socket-effect'><%= _gempassive[j].text %></span><%}%></li><%}else if(_gem.isJewel){var _gemIco = mediaBase + 'small/' + _gem.item.icon + '.png';%><li class='full-socket'><img class='gem' src='<%= _gemIco %>'><span class='d3-color-<%= _gem.item.displayColor %>'><%= _gem.item.name %><span class='item-jewel-rank'>\u2013 \u7B49\u7D1A <%= _gem.jewelRank %></span></span><ul><% var jewelpassive = _gem.attributes.passive,jewelpassive1 = jewelpassive[0],jewelpassive2 = jewelpassive[1];var jewelpassive1text = jewelpassive1.text.replace(/([+-]*[\d.]+|%)/g,'<span class=value>$1</span>');var jewelpassive2text = jewelpassive2.text.replace(/(\u9700\u898125\u7EA7)/g,'').replace(/([+-]*[\d.]+|%)/g,'<span class=value>$1</span>');if(jewelpassive2.color == 'gray'){jewelpassive2text += '<span class=d3-color-red>\uFF08\u9700\u8981\u7B49\u7D1A 25\uFF09</span>'}%><li class='jewel-effect d3-color-<%= jewelpassive1.color %>'><p><%= jewelpassive1text %></p></li><li class='jewel-effect d3-color-<%= jewelpassive2.color %>'><p><%= jewelpassive2text %></p></li></ul></li><%}}else{%><li class='empty-socket d3-color-blue'>\u7A7A\u7684\u9472\u5B54</li><%}}} %><%# '\u5982\u679C\u5B58\u5728\u5E7B\u5316'%><% if(data.transmogItem){%><p class='item-property-category d3-color-blue'>\u5E7B\u5316:</p><li class='value d3-color-<%= data.transmogItem.displayColor%>'><%= data.transmogItem.name%></li><%}%></ul><%# \u5957\u88C5\u6548\u679C %><% if(data.set){var _set = data.set,_setItems = _set.items,_ranks = _set.ranks;%><ul class='item-itemset'><li class='item-itemset-name'><span class='d3-color-green'><%= _set.name %></span></li><% for(var k = 0 ; k < _setItems.length ; k ++){var _itemColor = data.setItemsEquipped.indexOf(_setItems[k].id) == -1 ? 'gray' : 'green';%><li class='item-itemset-piece indent'><span class='d3-color-<%= _itemColor %>'><%= _setItems[k].name %></span></li><%}%><% for(var l = 0 ; l < _ranks.length ; l ++){var _ranksprimary = _ranks[l].attributes.primary;var _rankssecondary = _ranks[l].attributes.secondary;var _rankspassive = _ranks[l].attributes.passive;var _ranksColor = '';if(data.setItemsEquipped.length >= _ranks[l].required){_ranksColor = 'orange';}else{_ranksColor = 'gray';}%><li class='d3-color-<%= _ranksColor %> item-itemset-bonus-amount'>(<span class='value'><%= _ranks[l].required %></span>)\u4EF6\uFF1A</li><% for(var ll = 0 ; ll < _ranksprimary.length ; ll ++){var _rankText = _ranksprimary[ll].text;if(data.setItemsEquipped.length >= _ranks[l].required){_rankText = _rankText.replace(/([+-]*[\d.]+|%)/g,'<span class=value>$1</span>');}%><li class='d3-color-<%= _ranksColor %> item-itemset-bonus-desc indent'><%= _rankText %></li><%}%><% for(var ll = 0 ; ll < _rankssecondary.length ; ll ++){var _rankText = _rankssecondary[ll].text;if(data.setItemsEquipped.length >= _ranks[l].required){_rankText = _rankText.replace(/([+-]*[\d.]+|%)/g,'<span class=value>$1</span>');}%><li class='d3-color-<%= _ranksColor %> item-itemset-bonus-desc indent'><%= _rankText %></li><%}%><% for(var ll = 0 ; ll < _rankspassive.length ; ll ++){var _rankText = _rankspassive[ll].text;if(data.setItemsEquipped.length >= _ranks[l].required){_rankText = _rankText.replace(/([+-]*[\d.]+|%)/g,'<span class=value>$1</span>');}%><li class='d3-color-<%= _ranksColor %> item-itemset-bonus-desc indent'><%= _rankText %></li><%}%><%}%></ul><%}%><ul class='item-extras'><li class='item-reqlevel'><span class='d3-color-gold'>\u9700\u8981\u7B49\u7D1A\uFF1A</span><span class='value'><%= data.requiredLevel %></span></li><% if(data.accountBound){%><li>\u8D26\u53F7\u7ED1\u5B9A</li><%}%></ul><%if(data.stackSizeMax == 0){%><span class='item-unique-equipped'>\u4EC5\u53EF\u88C5\u5907\u4E00\u4EF6</span><%}%><%# \u5982\u679C\u914D\u65B9\u5B58\u5728\u8BF4\u660E\u662F\u953B\u9020\u7269\u54C1 %><% if(data.recipe){var _recipeLevel = data.recipe.id.substring(1,3);%><ul class='item-crafting'><li>\u5236\u4F5C\u8005<span class='value'>\u94C1\u5320</span>(\u7B49\u7D1A<%= _recipeLevel %>)</li><li class='indent'><span class='d3-color-<%= data.recipe.itemProduced.displayColor %>'>\u8BBE\u8BA1\u56FE\uFF1A<%= data.recipe.itemProduced.name %></span></li></ul><%}%><span class='clear'></span></div></div><div class='tooltip-extension '><div class='flavor'><%= data.flavorText %></div></div></div>";
  window.ejsTemplate = b;
  a.prototype = {
    init: function(d) {
      var c = this;
      c.options = d;
      c.ejs = new EJS({
        text: b
      });
    },
    storage: function(f, g) {
      var d = this,
        c = window.localStorage;
      if (c) {
        if (c.length > 1000) {
          c.clear();
        }
        if (g) {
          try {
            c.setItem(f, JSON.stringify(g));
          } catch (h) {
            c.clear();
            c.setItem(f, JSON.stringify(g));
          }
        } else {
          return JSON.parse(c.getItem(f));
        }
      }
    },
    transform: function(g, f, h) {
      var d = this;
      d.output = null;
      var e = d.storage(f);
      if (g != "cn") {
        d.output = h;
      }
      if (e) {
        var c = d.ejs.render({
          data: e
        });
        h(c);
      } else {
        getJSONP(f, function(i) {
          var j = d.ejs.render({
            data: i
          });
          h(j);
        });
      }
    }
  };
  window.D3Transform = new a();
  window.BnetCN = {
    D3: {
      Tooltips: {
        registerData: function(c) {
          D3Transform.output(c.tooltipHtml);
        }
      }
    }
  };
})(window);
