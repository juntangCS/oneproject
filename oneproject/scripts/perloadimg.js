function preloadimages(arrs) {
    var newimages = [];
    var arr = arrs.split(" ");
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image();
        newimages[i].src = "../images/" + arr[i];
    }
}
preloadimages("topbanner.jpg index1.jpg index2.jpg index3.jpg index4.jpg  bg1.jpg bg2.jpg bg3.jpg bg4.jpg  info.jpg bottom.jpg aboutflash.jpg fwcenter.jpg wsmm.jpg verone.jpg aboutinfo.jpg contact.jpg");