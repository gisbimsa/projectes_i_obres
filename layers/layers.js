ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25831").setExtent([415222.100861, 4570248.500674, 441270.845824, 4596297.245637]);
var wms_layers = [];


        var lyr_Basesatllit_0 = new ol.layer.Tile({
            'title': 'Base satèl.lit',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_fons_2 = new ol.format.GeoJSON();
var features_fons_2 = format_fons_2.readFeatures(json_fons_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_fons_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fons_2.addFeatures(features_fons_2);
var lyr_fons_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fons_2, 
                style: style_fons_2,
                interactive: false,
                title: '<img src="styles/legend/fons_2.png" /> fons'
            });
var format_illes_3 = new ol.format.GeoJSON();
var features_illes_3 = format_illes_3.readFeatures(json_illes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_illes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_illes_3.addFeatures(features_illes_3);
var lyr_illes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_illes_3, 
                style: style_illes_3,
                interactive: false,
                title: '<img src="styles/legend/illes_3.png" /> illes'
            });
var format_edificis_4 = new ol.format.GeoJSON();
var features_edificis_4 = format_edificis_4.readFeatures(json_edificis_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_edificis_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_edificis_4.addFeatures(features_edificis_4);
var lyr_edificis_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_edificis_4, 
                style: style_edificis_4,
                interactive: false,
                title: '<img src="styles/legend/edificis_4.png" /> edificis'
            });
var format_limits_administratius_5 = new ol.format.GeoJSON();
var features_limits_administratius_5 = format_limits_administratius_5.readFeatures(json_limits_administratius_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_limits_administratius_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limits_administratius_5.addFeatures(features_limits_administratius_5);
var lyr_limits_administratius_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limits_administratius_5, 
                style: style_limits_administratius_5,
                interactive: false,
                title: '<img src="styles/legend/limits_administratius_5.png" /> limits_administratius'
            });
var format_ProjectesCiutatSenyalitzaci_6 = new ol.format.GeoJSON();
var features_ProjectesCiutatSenyalitzaci_6 = format_ProjectesCiutatSenyalitzaci_6.readFeatures(json_ProjectesCiutatSenyalitzaci_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_ProjectesCiutatSenyalitzaci_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectesCiutatSenyalitzaci_6.addFeatures(features_ProjectesCiutatSenyalitzaci_6);
var lyr_ProjectesCiutatSenyalitzaci_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjectesCiutatSenyalitzaci_6, 
                style: style_ProjectesCiutatSenyalitzaci_6,
                interactive: true,
                title: '<img src="styles/legend/ProjectesCiutatSenyalitzaci_6.png" /> Projectes Ciutat (Senyalització)'
            });
var format_Projectesdobra_7 = new ol.format.GeoJSON();
var features_Projectesdobra_7 = format_Projectesdobra_7.readFeatures(json_Projectesdobra_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Projectesdobra_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projectesdobra_7.addFeatures(features_Projectesdobra_7);
var lyr_Projectesdobra_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Projectesdobra_7, 
                style: style_Projectesdobra_7,
                interactive: true,
                title: '<img src="styles/legend/Projectesdobra_7.png" /> Projectes d\'obra'
            });
var format_ProjectesDistricte_8 = new ol.format.GeoJSON();
var features_ProjectesDistricte_8 = format_ProjectesDistricte_8.readFeatures(json_ProjectesDistricte_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_ProjectesDistricte_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectesDistricte_8.addFeatures(features_ProjectesDistricte_8);
var lyr_ProjectesDistricte_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjectesDistricte_8, 
                style: style_ProjectesDistricte_8,
                interactive: true,
                title: '<img src="styles/legend/ProjectesDistricte_8.png" /> Projectes Districte'
            });
var format_ProjectesCiutat_9 = new ol.format.GeoJSON();
var features_ProjectesCiutat_9 = format_ProjectesCiutat_9.readFeatures(json_ProjectesCiutat_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_ProjectesCiutat_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectesCiutat_9.addFeatures(features_ProjectesCiutat_9);
var lyr_ProjectesCiutat_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjectesCiutat_9, 
                style: style_ProjectesCiutat_9,
                interactive: true,
                title: '<img src="styles/legend/ProjectesCiutat_9.png" /> Projectes Ciutat'
            });
var format_ObresfinalitzadesSenyalitzaci_10 = new ol.format.GeoJSON();
var features_ObresfinalitzadesSenyalitzaci_10 = format_ObresfinalitzadesSenyalitzaci_10.readFeatures(json_ObresfinalitzadesSenyalitzaci_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_ObresfinalitzadesSenyalitzaci_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObresfinalitzadesSenyalitzaci_10.addFeatures(features_ObresfinalitzadesSenyalitzaci_10);
var lyr_ObresfinalitzadesSenyalitzaci_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ObresfinalitzadesSenyalitzaci_10, 
                style: style_ObresfinalitzadesSenyalitzaci_10,
                interactive: true,
                title: '<img src="styles/legend/ObresfinalitzadesSenyalitzaci_10.png" /> Obres finalitzades (Senyalització)'
            });
var format_Obres_finalitzades_11 = new ol.format.GeoJSON();
var features_Obres_finalitzades_11 = format_Obres_finalitzades_11.readFeatures(json_Obres_finalitzades_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Obres_finalitzades_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obres_finalitzades_11.addFeatures(features_Obres_finalitzades_11);
var lyr_Obres_finalitzades_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obres_finalitzades_11, 
                style: style_Obres_finalitzades_11,
                interactive: true,
                title: '<img src="styles/legend/Obres_finalitzades_11.png" /> Obres_finalitzades'
            });
var format_ObraInfraestructuresSenyalitzaci_12 = new ol.format.GeoJSON();
var features_ObraInfraestructuresSenyalitzaci_12 = format_ObraInfraestructuresSenyalitzaci_12.readFeatures(json_ObraInfraestructuresSenyalitzaci_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_ObraInfraestructuresSenyalitzaci_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObraInfraestructuresSenyalitzaci_12.addFeatures(features_ObraInfraestructuresSenyalitzaci_12);
var lyr_ObraInfraestructuresSenyalitzaci_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ObraInfraestructuresSenyalitzaci_12, 
                style: style_ObraInfraestructuresSenyalitzaci_12,
                interactive: true,
                title: '<img src="styles/legend/ObraInfraestructuresSenyalitzaci_12.png" /> Obra Infraestructures (Senyalització)'
            });
var format_ObresencursServeis_13 = new ol.format.GeoJSON();
var features_ObresencursServeis_13 = format_ObresencursServeis_13.readFeatures(json_ObresencursServeis_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_ObresencursServeis_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObresencursServeis_13.addFeatures(features_ObresencursServeis_13);
var lyr_ObresencursServeis_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ObresencursServeis_13, 
                style: style_ObresencursServeis_13,
                interactive: true,
                title: '<img src="styles/legend/ObresencursServeis_13.png" /> Obres en curs Serveis'
            });
var format_ObresencursEdificaci_14 = new ol.format.GeoJSON();
var features_ObresencursEdificaci_14 = format_ObresencursEdificaci_14.readFeatures(json_ObresencursEdificaci_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_ObresencursEdificaci_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObresencursEdificaci_14.addFeatures(features_ObresencursEdificaci_14);
var lyr_ObresencursEdificaci_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ObresencursEdificaci_14, 
                style: style_ObresencursEdificaci_14,
                interactive: true,
                title: '<img src="styles/legend/ObresencursEdificaci_14.png" /> Obres en curs Edificació'
            });
var format_ObresencursInfraestructures_15 = new ol.format.GeoJSON();
var features_ObresencursInfraestructures_15 = format_ObresencursInfraestructures_15.readFeatures(json_ObresencursInfraestructures_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_ObresencursInfraestructures_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObresencursInfraestructures_15.addFeatures(features_ObresencursInfraestructures_15);
var lyr_ObresencursInfraestructures_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ObresencursInfraestructures_15, 
                style: style_ObresencursInfraestructures_15,
                interactive: true,
                title: '<img src="styles/legend/ObresencursInfraestructures_15.png" /> Obres en curs Infraestructures'
            });
var format_Infoobres_16 = new ol.format.GeoJSON();
var features_Infoobres_16 = format_Infoobres_16.readFeatures(json_Infoobres_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Infoobres_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infoobres_16.addFeatures(features_Infoobres_16);
var lyr_Infoobres_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Infoobres_16, 
                style: style_Infoobres_16,
                interactive: true,
                title: '<img src="styles/legend/Infoobres_16.png" /> Info obres'
            });
var format_Infoprojectes_17 = new ol.format.GeoJSON();
var features_Infoprojectes_17 = format_Infoprojectes_17.readFeatures(json_Infoprojectes_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Infoprojectes_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infoprojectes_17.addFeatures(features_Infoprojectes_17);
var lyr_Infoprojectes_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Infoprojectes_17, 
                style: style_Infoprojectes_17,
                interactive: true,
                title: '<img src="styles/legend/Infoprojectes_17.png" /> Info projectes'
            });
var group_Obresencurs = new ol.layer.Group({
                                layers: [lyr_ObraInfraestructuresSenyalitzaci_12,lyr_ObresencursServeis_13,lyr_ObresencursEdificaci_14,lyr_ObresencursInfraestructures_15,],
                                title: "Obres en curs"});
var group_Obresfinalitzades = new ol.layer.Group({
                                layers: [lyr_ObresfinalitzadesSenyalitzaci_10,lyr_Obres_finalitzades_11,],
                                title: "Obres finalitzades"});
var group_Projectes = new ol.layer.Group({
                                layers: [lyr_ProjectesCiutatSenyalitzaci_6,lyr_Projectesdobra_7,lyr_ProjectesDistricte_8,lyr_ProjectesCiutat_9,],
                                title: "Projectes"});
var group_Basecartogrficafosca = new ol.layer.Group({
                                layers: [lyr_fons_2,lyr_illes_3,lyr_edificis_4,lyr_limits_administratius_5,],
                                title: "Base cartogràfica fosca"});
var group_Bases = new ol.layer.Group({
                                layers: [lyr_Basesatllit_0,lyr_OpenStreetMap_1,],
                                title: "Bases"});

lyr_Basesatllit_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_fons_2.setVisible(true);lyr_illes_3.setVisible(true);lyr_edificis_4.setVisible(true);lyr_limits_administratius_5.setVisible(true);lyr_ProjectesCiutatSenyalitzaci_6.setVisible(true);lyr_Projectesdobra_7.setVisible(true);lyr_ProjectesDistricte_8.setVisible(true);lyr_ProjectesCiutat_9.setVisible(true);lyr_ObresfinalitzadesSenyalitzaci_10.setVisible(true);lyr_Obres_finalitzades_11.setVisible(true);lyr_ObraInfraestructuresSenyalitzaci_12.setVisible(true);lyr_ObresencursServeis_13.setVisible(true);lyr_ObresencursEdificaci_14.setVisible(true);lyr_ObresencursInfraestructures_15.setVisible(true);lyr_Infoobres_16.setVisible(true);lyr_Infoprojectes_17.setVisible(true);
var layersList = [group_Bases,group_Basecartogrficafosca,group_Projectes,group_Obresfinalitzades,group_Obresencurs,lyr_Infoobres_16,lyr_Infoprojectes_17];
lyr_fons_2.set('fieldAliases', {'fid': 'fid', });
lyr_illes_3.set('fieldAliases', {'FID': 'FID', });
lyr_edificis_4.set('fieldAliases', {'FID': 'FID', });
lyr_limits_administratius_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ProjectesCiutatSenyalitzaci_6.set('fieldAliases', {'id': 'id', 'codi_prj': 'codi_prj', 'nom_proj': 'nom_proj', 'departament': 'departament', 'codi_natura': 'codi_natura', });
lyr_Projectesdobra_7.set('fieldAliases', {'id': 'id', 'codi_prj': 'codi_prj', 'nom_proj': 'nom_proj', 'departament': 'departament', 'codi_natura': 'codi_natura', });
lyr_ProjectesDistricte_8.set('fieldAliases', {'id': 'id', 'codi_prj': 'codi_prj', 'nom_proj': 'nom_proj', 'departament': 'departament', 'codi_natura': 'codi_natura', });
lyr_ProjectesCiutat_9.set('fieldAliases', {'id': 'id', 'codi_prj': 'codi_prj', 'nom_proj': 'nom_proj', 'departament': 'departament', 'codi_natura': 'codi_natura', });
lyr_ObresfinalitzadesSenyalitzaci_10.set('fieldAliases', {'id_ob': 'id_ob', 'cod_obra': 'cod_obra', 'nom_obra': 'nom_obra', 'proj_soci_1': 'proj_soci_1', 'proj_soci_2': 'proj_soci_2', 'proj_soci_3': 'proj_soci_3', 'departament': 'departament', 'estat': 'estat', });
lyr_Obres_finalitzades_11.set('fieldAliases', {'id_ob': 'id_ob', 'cod_obra': 'cod_obra', 'nom_obra': 'nom_obra', 'proj_soci_1': 'proj_soci_1', 'proj_soci_2': 'proj_soci_2', 'proj_soci_3': 'proj_soci_3', 'departament': 'departament', 'estat': 'estat', });
lyr_ObraInfraestructuresSenyalitzaci_12.set('fieldAliases', {'id_ob': 'id_ob', 'cod_obra': 'cod_obra', 'nom_obra': 'nom_obra', 'proj_soci_1': 'proj_soci_1', 'proj_soci_2': 'proj_soci_2', 'proj_soci_3': 'proj_soci_3', 'departament': 'departament', 'estat': 'estat', });
lyr_ObresencursServeis_13.set('fieldAliases', {'id_ob': 'id_ob', 'cod_obra': 'cod_obra', 'nom_obra': 'nom_obra', 'proj_soci_1': 'proj_soci_1', 'proj_soci_2': 'proj_soci_2', 'proj_soci_3': 'proj_soci_3', 'departament': 'departament', 'estat': 'estat', });
lyr_ObresencursEdificaci_14.set('fieldAliases', {'id_ob': 'id_ob', 'cod_obra': 'cod_obra', 'nom_obra': 'nom_obra', 'proj_soci_1': 'proj_soci_1', 'proj_soci_2': 'proj_soci_2', 'proj_soci_3': 'proj_soci_3', 'departament': 'departament', 'estat': 'estat', });
lyr_ObresencursInfraestructures_15.set('fieldAliases', {'id_ob': 'id_ob', 'cod_obra': 'cod_obra', 'nom_obra': 'nom_obra', 'proj_soci_1': 'proj_soci_1', 'proj_soci_2': 'proj_soci_2', 'proj_soci_3': 'proj_soci_3', 'departament': 'departament', 'estat': 'estat', });
lyr_Infoobres_16.set('fieldAliases', {'id_ob': 'id_ob', 'cod_obra': 'cod_obra', 'nom_obra': 'nom_obra', 'proj_soci_1': 'proj_soci_1', 'proj_soci_2': 'proj_soci_2', 'proj_soci_3': 'proj_soci_3', 'departament': 'departament', 'estat': 'estat', });
lyr_Infoprojectes_17.set('fieldAliases', {'id': 'id', 'codi_prj': 'codi_prj', 'nom_proj': 'nom_proj', });
lyr_fons_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_illes_3.set('fieldImages', {'FID': '', });
lyr_edificis_4.set('fieldImages', {'FID': '', });
lyr_limits_administratius_5.set('fieldImages', {'fid': 'Range', 'id': 'Range', });
lyr_ProjectesCiutatSenyalitzaci_6.set('fieldImages', {'id': 'TextEdit', 'codi_prj': 'TextEdit', 'nom_proj': 'TextEdit', 'departament': 'TextEdit', 'codi_natura': 'TextEdit', });
lyr_Projectesdobra_7.set('fieldImages', {'id': 'TextEdit', 'codi_prj': 'TextEdit', 'nom_proj': 'TextEdit', 'departament': 'TextEdit', 'codi_natura': 'TextEdit', });
lyr_ProjectesDistricte_8.set('fieldImages', {'id': 'TextEdit', 'codi_prj': 'TextEdit', 'nom_proj': 'TextEdit', 'departament': 'TextEdit', 'codi_natura': 'TextEdit', });
lyr_ProjectesCiutat_9.set('fieldImages', {'id': 'TextEdit', 'codi_prj': 'TextEdit', 'nom_proj': 'TextEdit', 'departament': 'TextEdit', 'codi_natura': 'TextEdit', });
lyr_ObresfinalitzadesSenyalitzaci_10.set('fieldImages', {'id_ob': 'TextEdit', 'cod_obra': 'TextEdit', 'nom_obra': 'TextEdit', 'proj_soci_1': 'TextEdit', 'proj_soci_2': 'TextEdit', 'proj_soci_3': 'TextEdit', 'departament': 'TextEdit', 'estat': 'TextEdit', });
lyr_Obres_finalitzades_11.set('fieldImages', {'id_ob': 'TextEdit', 'cod_obra': 'TextEdit', 'nom_obra': 'TextEdit', 'proj_soci_1': 'TextEdit', 'proj_soci_2': 'TextEdit', 'proj_soci_3': 'TextEdit', 'departament': 'TextEdit', 'estat': 'TextEdit', });
lyr_ObraInfraestructuresSenyalitzaci_12.set('fieldImages', {'id_ob': 'TextEdit', 'cod_obra': 'TextEdit', 'nom_obra': 'TextEdit', 'proj_soci_1': 'TextEdit', 'proj_soci_2': 'TextEdit', 'proj_soci_3': 'TextEdit', 'departament': 'TextEdit', 'estat': 'TextEdit', });
lyr_ObresencursServeis_13.set('fieldImages', {'id_ob': 'TextEdit', 'cod_obra': 'TextEdit', 'nom_obra': 'TextEdit', 'proj_soci_1': 'TextEdit', 'proj_soci_2': 'TextEdit', 'proj_soci_3': 'TextEdit', 'departament': 'TextEdit', 'estat': 'TextEdit', });
lyr_ObresencursEdificaci_14.set('fieldImages', {'id_ob': 'TextEdit', 'cod_obra': 'TextEdit', 'nom_obra': 'TextEdit', 'proj_soci_1': 'TextEdit', 'proj_soci_2': 'TextEdit', 'proj_soci_3': 'TextEdit', 'departament': 'TextEdit', 'estat': 'TextEdit', });
lyr_ObresencursInfraestructures_15.set('fieldImages', {'id_ob': 'TextEdit', 'cod_obra': 'TextEdit', 'nom_obra': 'TextEdit', 'proj_soci_1': 'TextEdit', 'proj_soci_2': 'TextEdit', 'proj_soci_3': 'TextEdit', 'departament': 'TextEdit', 'estat': 'TextEdit', });
lyr_Infoobres_16.set('fieldImages', {'id_ob': 'TextEdit', 'cod_obra': 'TextEdit', 'nom_obra': 'TextEdit', 'proj_soci_1': 'TextEdit', 'proj_soci_2': 'TextEdit', 'proj_soci_3': 'TextEdit', 'departament': 'TextEdit', 'estat': 'TextEdit', });
lyr_Infoprojectes_17.set('fieldImages', {'id': 'Range', 'codi_prj': 'TextEdit', 'nom_proj': 'TextEdit', });
lyr_fons_2.set('fieldLabels', {});
lyr_illes_3.set('fieldLabels', {});
lyr_edificis_4.set('fieldLabels', {});
lyr_limits_administratius_5.set('fieldLabels', {});
lyr_ProjectesCiutatSenyalitzaci_6.set('fieldLabels', {});
lyr_Projectesdobra_7.set('fieldLabels', {});
lyr_ProjectesDistricte_8.set('fieldLabels', {});
lyr_ProjectesCiutat_9.set('fieldLabels', {});
lyr_ObresfinalitzadesSenyalitzaci_10.set('fieldLabels', {});
lyr_Obres_finalitzades_11.set('fieldLabels', {});
lyr_ObraInfraestructuresSenyalitzaci_12.set('fieldLabels', {});
lyr_ObresencursServeis_13.set('fieldLabels', {});
lyr_ObresencursEdificaci_14.set('fieldLabels', {});
lyr_ObresencursInfraestructures_15.set('fieldLabels', {});
lyr_Infoobres_16.set('fieldLabels', {'id_ob': 'no label', 'cod_obra': 'header label', 'nom_obra': 'header label', 'proj_soci_1': 'no label', 'proj_soci_2': 'no label', 'proj_soci_3': 'no label', 'departament': 'no label', 'estat': 'no label', });
lyr_Infoprojectes_17.set('fieldLabels', {'id': 'no label', 'codi_prj': 'header label', 'nom_proj': 'header label', });
lyr_Infoprojectes_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});