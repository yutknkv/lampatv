(function () {
  'use strict';
  Lampa.Platform.tv();

  Lampa.Storage.set('keyboard_type', 'integrate');
  window.lampa_settings.torrents_use = true;
  window.lampa_settings.demo = false;
  window.lampa_settings.read_only = false;
  window.lampa_settings.plugins_use = false;

  Lampa.Settings.listener.follow('open', function (e) {
    if (e.name == 'main') {
      setTimeout(function() {
        $('div[data-component="tmdb"]').remove();
        $('div[data-component="sisi"]').remove();
        $('div[data-component="my_iptv"]').remove();
      }, 5);
    }
  });
  setTimeout(function(){
    $('.open--premium').remove();
  }, 1000);
  Lampa.Listener.follow('app', function (e) {
    if (e.type == 'ready') {
      setTimeout(function(){
        $('[data-action=anime]').eq(0).remove();
        $('[data-action=mytorrents]').eq(0).remove();
        $('[data-action=about]').eq(0).remove();
        $('[data-action=console]').eq(0).remove();
        $('[data-action=subscribes]').eq(0).remove();
      },10);
    }
  });
  Lampa.Listener.follow('full', function(e) {
    if (e.type == 'complite') {
      setTimeout(function(){
        $('.button--subscribe').remove();
        $('.view--online', Lampa.Activity.active().activity.render()).empty().append('<svg viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32"><path d="m17 14.5 4.2-4.5L4.9 1.2c-.1-.1-.3-.1-.6-.2L17 14.5zM23 21l5.9-3.2c.7-.4 1.1-1 1.1-1.8s-.4-1.5-1.1-1.8L23 11l-4.7 5 4.7 5zM2.4 1.9c-.3.3-.4.7-.4 1.1v26c0 .4.1.8.4 1.2L15.6 16 2.4 1.9zM17 17.5 4.3 31c.2 0 .4-.1.6-.2L21.2 22 17 17.5z" fill="currentColor" fill="#ffffff" class="fill-000000"></path></svg>РћРЅР»Р°Р№РЅ');
      },10);
    }
  });
  Lampa.SettingsApi.addComponent({
    component: 'ero',
    name: '18+',
    icon: '<svg width="256px" height="256px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M51.348 15.912c-3.332-3.347-7.33-4.796-11.498-4.796c-.359 0-.721.016-1.08.038C37.734 6.492 36.295 2 36.295 2s-6.291 3.991-9.97 7.716c-4.255-3.327-9.149-6.391-9.149-6.391s-1.044 7.646-.678 13.247c-5.577-.361-13.188.692-13.188.692s3.051 4.912 6.368 9.185C5.97 30.146 2 36.47 2 36.47s4.646 1.497 9.382 2.538c-.159 4.421 1.261 8.681 4.776 12.213C23.599 58.692 36.494 62 46.373 62c5.729-.001 10.445-1.113 12.492-3.17c5.522-5.549 4.184-31.161-7.517-42.918m6.074 41.482c-1.236 1.242-4.789 2.57-11.049 2.571c-9.275 0-21.77-3.147-28.771-10.18c-8.058-8.096-3.363-20.183 4.41-27.987c5.389-5.413 12.057-8.646 17.838-8.646c3.9.001 7.283 1.411 10.055 4.198c4.908 4.93 8.424 13.172 9.643 22.61c1.147 8.891-.2 15.499-2.126 17.434" fill="#ffffff"></path><path d="M40.172 18.321c.578.403 1.215.606 1.771.607c.541 0 1.006-.19 1.271-.573c.545-.775.063-2.052-1.072-2.848c-.58-.405-1.215-.607-1.773-.607c-.539 0-1.006.19-1.273.572c-.543.776-.063 2.054 1.076 2.849" fill="#ffffff"></path><path d="M44.074 32.729a1.34 1.34 0 0 0-.891.31c-.715.621-.557 1.976.352 3.025c.604.695 1.389 1.081 2.057 1.08c.34.001.65-.099.891-.309c.717-.621.557-1.975-.352-3.024c-.604-.696-1.387-1.081-2.057-1.082" fill="#ffffff"></path><path d="M35.293 23.932a1.306 1.306 0 0 0-.865.294c-.727.609-.592 1.968.303 3.031c.602.715 1.391 1.114 2.064 1.115c.33 0 .629-.097.867-.295c.727-.61.59-1.966-.303-3.033c-.601-.714-1.392-1.113-2.066-1.112" fill="#ffffff"></path><path d="M52.404 26.469c-.518-.945-1.369-1.53-2.111-1.53a1.264 1.264 0 0 0-.604.148c-.832.456-.967 1.813-.301 3.032c.52.945 1.367 1.529 2.111 1.529c.213 0 .418-.047.604-.148c.833-.455.967-1.812.301-3.031" fill="#ffffff"></path><path d="M54.955 38.393c-.102 0-.203.014-.303.039c-.918.24-1.379 1.521-1.027 2.866c.313 1.198 1.162 2.037 1.994 2.038c.102 0 .203-.013.303-.038c.918-.239 1.379-1.523 1.027-2.868c-.312-1.196-1.164-2.037-1.994-2.037" fill="#ffffff"></path><path d="M53.76 51.021c-.354.001-.674.105-.918.327c-.703.636-.518 1.987.414 3.019c.607.671 1.381 1.038 2.041 1.039c.354-.001.676-.106.922-.329c.701-.636.516-1.987-.418-3.017c-.606-.669-1.379-1.039-2.041-1.039" fill="#ffffff"></path><path d="M32.923 50.042c-.569-.384-1.189-.573-1.736-.572c-.559 0-1.041.198-1.309.598c-.527.788-.02 2.054 1.135 2.825c.57.383 1.191.573 1.736.573c.561 0 1.042-.2 1.309-.6c.528-.786.02-2.053-1.135-2.824" fill="#ffffff"></path><path d="M21.165 46.683c-.569-.382-1.189-.571-1.735-.571c-.561 0-1.042.199-1.309.597c-.527.787-.02 2.055 1.134 2.825c.57.382 1.191.574 1.738.573c.559 0 1.041-.199 1.307-.6c.526-.786.02-2.052-1.135-2.824" fill="#ffffff"></path><path d="M42.547 54.622a3.435 3.435 0 0 0-1.275-.259c-.797-.001-1.463.326-1.701.91c-.354.877.404 2.013 1.691 2.531c.434.175.871.258 1.275.257c.797 0 1.465-.324 1.699-.908c.356-.878-.4-2.012-1.689-2.531" fill="#ffffff"></path><path d="M45.164 44.696c-.543-.323-1.119-.481-1.633-.481c-.617-.001-1.143.229-1.406.672c-.486.814.09 2.053 1.283 2.763c.543.322 1.119.48 1.635.48c.615 0 1.141-.229 1.404-.672c.485-.816-.09-2.054-1.283-2.762" fill="#ffffff"></path><path d="M34.568 37.753c-.602-.5-1.295-.758-1.895-.757c-.465-.001-.873.155-1.138.474c-.604.729-.229 2.042.839 2.928c.603.498 1.297.758 1.897.758c.465 0 .871-.156 1.137-.475c.604-.73.231-2.043-.84-2.928" fill="#ffffff"></path><path d="M23.867 23.223c-.385.001-.73.119-.982.368c-.676.665-.434 2.008.539 2.997c.611.618 1.364.953 2.009.954c.384-.001.729-.119.981-.368c.676-.666.435-2.008-.539-2.996c-.612-.621-1.364-.954-2.008-.955" fill="#ffffff"></path><path d="M22.812 34.974c-.598-.473-1.275-.716-1.863-.715c-.484 0-.909.163-1.175.5c-.589.741-.184 2.046.904 2.906c.598.474 1.276.715 1.864.715c.484 0 .908-.161 1.174-.499c.587-.742.184-2.045-.904-2.907" fill="#ffffff"></path></g></svg>'
  });
  Lampa.SettingsApi.addParam({
    component: 'ero',
    param: {
      name: 'SISI_fix',
      type: 'trigger',
      //РґРѕСЃС‚СѓРїРЅРѕ select,input,trigger,title,static
      default: true
    },
    field: {
      name: 'РЈРґР°Р»РёС‚СЊ РїР»Р°РіРёРЅ 18+ РІ РіР»Р°РІРЅРѕРј РјРµРЅСЋ',
      //РќР°Р·РІР°РЅРёРµ РїРѕРґРїСѓРЅРєС‚Р° РјРµРЅСЋ
      description: 'РќР°Р¶РјРёС‚Рµ РґР»СЏ РІС‹Р±РѕСЂР°' //РљРѕРјРјРµРЅС‚Р°СЂРёР№ Рє РїРѕРґРїСѓРЅРєС‚Сѓ
    },
    onChange: function(value) {
      if(Lampa.Storage.field('SISI_fix') == false) {
        $('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains("РљР»СѓР±РЅРёС‡РєР°")').show();
      }
      if(Lampa.Storage.field('SISI_fix') == true) {
        $('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains("РљР»СѓР±РЅРёС‡РєР°")').hide();
      }
    }
  });
  if(Lampa.Storage.field('SISI_fix') == true) {
    setTimeout(function() {
      $('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains("РљР»СѓР±РЅРёС‡РєР°")').hide();
    }, 2500);
  }
  if(Lampa.Storage.field('SISI_fix') == true) $('[data-action=sisi_]').eq(0).hide();

  Lampa.Utils.putScriptAsync(
    [
      'https://lampa32.github.io/tv2.js',
      'http://79.137.205.41:9118/online.js',
      'http://79.137.205.41/start.js',
      'https://lampa32.github.io/torrserver.js',
      'https://lampa32.github.io/jackett.js',
      'https://lampa32.github.io/addon.js',
      'https://lampa32.github.io/mult.js',
      'http://79.137.205.41:9118/sisi.js',
    ],
    function () {},
  /*  if (!Lampa.Storage.get('tv_install')) {
     var pluginsArray = Lampa.Storage.get('plugins');
             pluginsArray.push({"url": "https://lampa32.github.io/tv.js", "status": 1});
     Lampa.Storage.set('plugins', pluginsArray);
     Lampa.Storage.set('tv_install', true); location.reload()
      }*/
  /*	
        var plugArray = Lampa.Storage.get('plugins');
        var delplugin = plugArray.filter(function(obj) {return obj.url !== 'http://tvlampa.fun/plugin.js'});
        Lampa.Storage.set('plugins', delplugin); 
    */
})();
