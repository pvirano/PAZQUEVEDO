var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Puntos_unidos_shape_1 = new ol.format.GeoJSON();
var features_Puntos_unidos_shape_1 = format_Puntos_unidos_shape_1.readFeatures(json_Puntos_unidos_shape_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_unidos_shape_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_unidos_shape_1.addFeatures(features_Puntos_unidos_shape_1);
var lyr_Puntos_unidos_shape_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_unidos_shape_1, 
                style: style_Puntos_unidos_shape_1,
                popuplayertitle: 'Puntos_unidos_shape',
                interactive: false,
    title: 'Puntos_unidos_shape<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_0.png" /> Biotren liena2<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_1.png" /> Cementerio Tome<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_2.png" /> centros de eventos Mare mare<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_3.png" /> ESTADIO ROA<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_4.png" /> Feria libre de hualpen<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_5.png" /> gym tome<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_6.png" /> IGLESIA PENCO TURIS6<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_7.png" /> Iglesia san pedro<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_8.png" /> MUSEO PENCO<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_9.png" /> pARROQUIA<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_10.png" /> PLAZA ARMAS TURIS4<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_11.png" /> Plaza Conce<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_12.png" /> Plaza Talcahuano<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_13.png" /> Plaza tome<br />\
    <img src="styles/legend/Puntos_unidos_shape_1_14.png" /> <br />' });
var format_barrios_selecionados_2 = new ol.format.GeoJSON();
var features_barrios_selecionados_2 = format_barrios_selecionados_2.readFeatures(json_barrios_selecionados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrios_selecionados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrios_selecionados_2.addFeatures(features_barrios_selecionados_2);
var lyr_barrios_selecionados_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barrios_selecionados_2, 
                style: style_barrios_selecionados_2,
                popuplayertitle: 'barrios_selecionados',
                interactive: false,
                title: '<img src="styles/legend/barrios_selecionados_2.png" /> barrios_selecionados'
            });
var format_combinadoshp_3 = new ol.format.GeoJSON();
var features_combinadoshp_3 = format_combinadoshp_3.readFeatures(json_combinadoshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_combinadoshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_combinadoshp_3.addFeatures(features_combinadoshp_3);
var lyr_combinadoshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_combinadoshp_3, 
                style: style_combinadoshp_3,
                popuplayertitle: 'combinado shp',
                interactive: true,
                title: '<img src="styles/legend/combinadoshp_3.png" /> combinado shp'
            });
var format_Capaunida_4 = new ol.format.GeoJSON();
var features_Capaunida_4 = format_Capaunida_4.readFeatures(json_Capaunida_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capaunida_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capaunida_4.addFeatures(features_Capaunida_4);
var lyr_Capaunida_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Capaunida_4, 
                style: style_Capaunida_4,
                popuplayertitle: 'Capa unida',
                interactive: true,
                title: '<img src="styles/legend/Capaunida_4.png" /> Capa unida'
            });
var format_capa_unida_5 = new ol.format.GeoJSON();
var features_capa_unida_5 = format_capa_unida_5.readFeatures(json_capa_unida_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_capa_unida_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capa_unida_5.addFeatures(features_capa_unida_5);
var lyr_capa_unida_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_capa_unida_5, 
                style: style_capa_unida_5,
                popuplayertitle: 'capa_unida',
                interactive: true,
                title: '<img src="styles/legend/capa_unida_5.png" /> capa_unida'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Puntos_unidos_shape_1.setVisible(true);lyr_barrios_selecionados_2.setVisible(true);lyr_combinadoshp_3.setVisible(true);lyr_Capaunida_4.setVisible(true);lyr_capa_unida_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Puntos_unidos_shape_1,lyr_barrios_selecionados_2,lyr_combinadoshp_3,lyr_Capaunida_4,lyr_capa_unida_5];
lyr_Puntos_unidos_shape_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', 'DESCRPCIÒN': 'DESCRPCIÒN', 'DIRRECION': 'DIRRECION', 'valor': 'valor', 'admi': 'admi', 'horario': 'horario', });
lyr_barrios_selecionados_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_combinadoshp_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', 'Descrip': 'Descrip', 'Ubicacion': 'Ubicacion', 'Valor': 'Valor', 'HORARIO': 'HORARIO', 'ADMI': 'ADMI', });
lyr_Capaunida_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', 'Descrip': 'Descrip', 'Ubicacion': 'Ubicacion', 'Valor': 'Valor', 'HORARIO': 'HORARIO', 'ADMI': 'ADMI', 'Id_2': 'Id_2', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_capa_unida_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', 'Descrip': 'Descrip', 'Ubicacion': 'Ubicacion', 'Valor': 'Valor', 'HORARIO': 'HORARIO', 'ADMI': 'ADMI', 'Id_2': 'Id_2', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_Puntos_unidos_shape_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'DESCRPCIÒN': '', 'DIRRECION': '', 'valor': '', 'admi': '', 'horario': '', });
lyr_barrios_selecionados_2.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_combinadoshp_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Descrip': 'TextEdit', 'Ubicacion': 'TextEdit', 'Valor': 'TextEdit', 'HORARIO': 'TextEdit', 'ADMI': 'TextEdit', });
lyr_Capaunida_4.set('fieldImages', {'id': '', 'Name': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layer': '', 'path': '', 'Descrip': '', 'Ubicacion': '', 'Valor': '', 'HORARIO': '', 'ADMI': '', 'Id_2': '', 'Nombre': '', 'Area': '', 'hab_m2': '', 'Sum_Poblac': '', 'av_hab': '', 'Long_tLic': '', 'Long_tNLic': '', 'Suma_Trans': '', 'porc_cober': '', 'Distance': '', 'LongcicloK': '', 'Long_rvial': '', });
lyr_capa_unida_5.set('fieldImages', {'id': '', 'Name': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layer': '', 'path': '', 'Descrip': '', 'Ubicacion': '', 'Valor': '', 'HORARIO': '', 'ADMI': '', 'Id_2': '', 'Nombre': '', 'Area': '', 'hab_m2': '', 'Sum_Poblac': '', 'av_hab': '', 'Long_tLic': '', 'Long_tNLic': '', 'Suma_Trans': '', 'porc_cober': '', 'Distance': '', 'LongcicloK': '', 'Long_rvial': '', });
lyr_Puntos_unidos_shape_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', 'DESCRPCIÒN': 'no label', 'DIRRECION': 'no label', 'valor': 'no label', 'admi': 'no label', 'horario': 'no label', });
lyr_barrios_selecionados_2.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_combinadoshp_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', 'Descrip': 'inline label - always visible', 'Ubicacion': 'inline label - visible with data', 'Valor': 'inline label - always visible', 'HORARIO': 'inline label - always visible', 'ADMI': 'inline label - always visible', });
lyr_Capaunida_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Ubicacion': 'inline label - always visible', 'Valor': 'inline label - always visible', 'HORARIO': 'inline label - always visible', 'ADMI': 'inline label - always visible', 'Id_2': 'no label', 'Nombre': 'inline label - always visible', 'Area': 'inline label - always visible', 'hab_m2': 'inline label - always visible', 'Sum_Poblac': 'inline label - always visible', 'av_hab': 'inline label - always visible', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_capa_unida_5.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'inline label - visible with data', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'header label - visible with data', 'path': 'no label', 'Descrip': 'no label', 'Ubicacion': 'no label', 'Valor': 'no label', 'HORARIO': 'no label', 'ADMI': 'no label', 'Id_2': 'no label', 'Nombre': 'inline label - always visible', 'Area': 'inline label - always visible', 'hab_m2': 'inline label - always visible', 'Sum_Poblac': 'inline label - always visible', 'av_hab': 'inline label - always visible', 'Long_tLic': 'inline label - always visible', 'Long_tNLic': 'inline label - always visible', 'Suma_Trans': 'inline label - always visible', 'porc_cober': 'inline label - always visible', 'Distance': 'inline label - always visible', 'LongcicloK': 'inline label - always visible', 'Long_rvial': 'inline label - always visible', });
lyr_capa_unida_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});