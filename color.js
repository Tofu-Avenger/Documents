const blocks = [
    ["acacia_log",103,96,86],
    ["acacia_log_top",150,88,55],
    ["acacia_planks",168,90,50],
    ["ancient_debris_side",95,63,55],
    ["andesite",136,136,136],
    ["barrel_bottom",121,89,51],
    ["barrel_side",107,81,50],
    ["barrel_top",134,100,58],
    ["basalt_side",73,72,77],
    ["basalt_top",80,81,86],
    ["bedrock",85,85,85],
    ["bee_nest_front",183,141,76],
    ["bee_nest_side",196,150,77],
    ["beehive_end",180,146,90],
    ["beehive_front",159,128,77],
    ["beehive_front_honey",167,131,74],
    ["beehive_side",157,126,75],
    ["birch_log",216,215,210],
    ["birch_log_top",193,179,135],
    ["birch_planks",192,175,121],
    ["black_concrete",8,10,15],
    ["black_concrete_powder",25,26,31],
    ["black_glazed_terracotta",67,30,32],
    ["black_shulker_box",25,25,29],
    ["black_terracotta",37,22,16],
    ["black_wool",20,21,25],
    ["blackstone",42,35,40],
    ["blackstone_top",42,36,41],
    ["blast_furnace_front",107,107,107],
    ["blast_furnace_side",107,107,107],
    ["blue_concrete",44,46,143],
    ["blue_concrete_powder",70,73,166],
    ["blue_glazed_terracotta",47,64,139],
    ["blue_ice",116,167,253],
    ["blue_shulker_box",43,45,140],
    ["blue_terracotta",74,59,91],
    ["blue_wool",53,57,157],
    ["bone_block_side",229,225,207],
    ["bone_block_top",209,206,179],
    ["bookshelf",117,94,59],
    ["brain_coral_block",207,91,159],
    ["bricks",150,97,83],
    ["brown_concrete",96,59,31],
    ["brown_concrete_powder",125,84,53],
    ["brown_glazed_terracotta",119,106,85],
    ["brown_mushroom_block",149,111,81],
    ["brown_shulker_box",106,66,35],
    ["brown_terracotta",77,51,35],
    ["brown_wool",114,71,40],
    ["bubble_coral_block",165,26,162],
    ["carved_pumpkin",150,84,17],
    ["chiseled_nether_bricks",47,23,28],
    ["chiseled_polished_blackstone",53,48,56],
    ["chiseled_quartz_block",231,226,218],
    ["chiseled_red_sandstone",183,96,27],
    ["chiseled_sandstone",216,202,155],
    ["chiseled_stone_bricks",119,118,119],
    ["clay",160,166,179],
    ["coal_block",16,15,15],
    ["coal_ore",116,116,116],
    ["coarse_dirt",119,85,59],
    ["cobblestone",127,127,127],
    ["composter_side",112,70,31],
    ["cracked_nether_bricks",40,20,23],
    ["cracked_polished_blackstone_bricks",43,37,43],
    ["cracked_stone_bricks",118,117,118],
    ["crimson_planks",101,48,70],
    ["crimson_stem_top",107,51,74],
    ["crying_obsidian",32,10,60],
    ["cut_red_sandstone",189,101,31],
    ["cut_sandstone",217,206,159],
    ["cyan_concrete",21,119,136],
    ["cyan_concrete_powder",36,147,157],
    ["cyan_glazed_terracotta",52,118,125],
    ["cyan_shulker_box",20,121,135],
    ["cyan_terracotta",86,91,91],
    ["cyan_wool",21,137,145],
    ["dark_oak_log",60,46,26],
    ["dark_oak_log_top",64,42,21],
    ["dark_oak_planks",66,43,20],
    ["dark_prismarine",51,91,75],
    ["dead_brain_coral_block",124,117,114],
    ["dead_bubble_coral_block",131,123,119],
    ["dead_fire_coral_block",131,123,119],
    ["dead_horn_coral_block",133,126,122],
    ["dead_tube_coral_block",130,123,119],
    ["diamond_block",98,237,228],
    ["diamond_ore",125,142,141],
    ["diorite",188,188,188],
    ["dirt",134,96,67],
    ["dispenser_front",122,121,121],
    ["dispenser_front_vertical",98,97,97],
    ["dried_kelp_side",38,48,29],
    ["dropper_front",122,121,121],
    ["dropper_front_vertical",97,96,96],
    ["emerald_block",42,203,87],
    ["emerald_ore",117,136,124],
    ["end_stone",219,222,158],
    ["end_stone_bricks",218,224,162],
    ["fire_coral_block",163,35,46],
    ["furnace_front",91,91,91],
    ["furnace_side",120,120,120],
    ["gilded_blackstone",56,43,38],
    ["glowstone",171,131,84],
    ["gold_block",246,208,61],
    ["gold_ore",143,140,125],
    ["granite",149,103,85],
    ["gravel",131,127,126],
    ["gray_concrete",54,57,61],
    ["gray_concrete_powder",76,81,84],
    ["gray_glazed_terracotta",83,90,93],
    ["gray_shulker_box",55,58,62],
    ["gray_terracotta",57,42,35],
    ["gray_wool",62,68,71],
    ["green_concrete",73,91,36],
    ["green_concrete_powder",97,119,44],
    ["green_glazed_terracotta",117,142,67],
    ["green_shulker_box",79,100,31],
    ["green_terracotta",76,83,42],
    ["green_wool",84,109,27],
    ["hay_block_side",166,136,38],
    ["honeycomb_block",229,148,29],
    ["horn_coral_block",216,199,66],
    ["iron_block",220,220,220],
    ["iron_ore",136,130,127],
    ["jack_o_lantern",214,152,52],
    ["jukebox_side",88,58,40],
    ["jungle_log",85,67,25],
    ["jungle_log_top",149,109,70],
    ["jungle_planks",160,115,80],
    ["lapis_block",30,67,140],
    ["lapis_ore",99,110,132],
    ["light_blue_concrete",35,137,198],
    ["light_blue_concrete_powder",74,180,213],
    ["light_blue_glazed_terracotta",94,164,208],
    ["light_blue_shulker_box",49,163,212],
    ["light_blue_terracotta",113,108,137],
    ["light_blue_wool",58,175,217],
    ["light_gray_concrete",125,125,115],
    ["light_gray_concrete_powder",154,154,148],
    ["light_gray_glazed_terracotta",144,166,167],
    ["light_gray_shulker_box",124,124,115],
    ["light_gray_terracotta",135,106,97],
    ["light_gray_wool",142,142,134],
    ["lime_concrete",94,168,24],
    ["lime_concrete_powder",125,189,41],
    ["lime_glazed_terracotta",162,197,55],
    ["lime_shulker_box",99,172,23],
    ["lime_terracotta",103,117,52],
    ["lime_wool",112,185,25],
    ["lodestone_side",119,119,123],
    ["loom_front",148,118,82],
    ["loom_side",145,101,72],
    ["magenta_concrete",169,48,159],
    ["magenta_concrete_powder",192,83,184],
    ["magenta_glazed_terracotta",208,100,191],
    ["magenta_shulker_box",173,54,163],
    ["magenta_terracotta",149,88,108],
    ["magenta_wool",189,68,179],
    ["melon_side",114,146,30],
    ["mossy_cobblestone",110,118,94],
    ["mossy_stone_bricks",115,121,105],
    ["mushroom_block_inside",201,170,120],
    ["mushroom_stem",203,196,185],
    ["nether_bricks",44,21,26],
    ["nether_gold_ore",115,54,42],
    ["nether_quartz_ore",117,65,62],
    ["netherite_block",66,61,63],
    ["netherrack",97,38,38],
    ["note_block",88,58,40],
    ["oak_log",109,85,50],
    ["oak_log_top",151,121,73],
    ["oak_planks",162,130,78],
    ["observer_back",71,69,69],
    ["observer_front",103,103,103],
    ["observer_side",70,68,68],
    ["observer_top",98,98,98],
    ["obsidian",15,10,24],
    ["orange_concrete",224,97,0],
    ["orange_concrete_powder",227,131,31],
    ["orange_glazed_terracotta",154,147,91],
    ["orange_shulker_box",234,106,8],
    ["orange_terracotta",161,83,37],
    ["orange_wool",240,118,19],
    ["packed_ice",141,180,250],
    ["pink_concrete",213,101,142],
    ["pink_concrete_powder",228,153,181],
    ["pink_glazed_terracotta",235,154,181],
    ["pink_shulker_box",230,121,157],
    ["pink_terracotta",161,78,78],
    ["pink_wool",237,141,172],
    ["piston_bottom",97,96,96],
    ["piston_side",110,104,96],
    ["piston_top",154,127,87],
    ["piston_top_sticky",122,149,92],
    ["polished_andesite",132,134,133],
    ["polished_basalt_side",88,88,91],
    ["polished_basalt_top",99,98,100],
    ["polished_blackstone",53,48,56],
    ["polished_blackstone_bricks",46,41,48],
    ["polished_diorite",192,193,194],
    ["polished_granite",154,106,89],
    ["prismarine_bricks",99,171,158],
    ["pumpkin_side",195,114,24],
    ["purple_concrete",100,31,156],
    ["purple_concrete_powder",131,55,177],
    ["purple_glazed_terracotta",109,48,152],
    ["purple_shulker_box",103,32,156],
    ["purple_terracotta",118,70,86],
    ["purple_wool",121,42,172],
    ["purpur_block",169,125,169],
    ["purpur_pillar",171,129,171],
    ["quartz_block_side",235,229,222],
    ["quartz_bricks",234,229,221],
    ["quartz_pillar",235,230,224],
    ["red_concrete",142,32,32],
    ["red_concrete_powder",168,54,50],
    ["red_glazed_terracotta",181,59,53],
    ["red_mushroom_block",200,46,45],
    ["red_nether_bricks",69,7,9],
    ["red_sand",190,102,33],
    ["red_sandstone",186,99,29],
    ["red_sandstone_bottom",185,98,28],
    ["red_shulker_box",140,31,30],
    ["red_terracotta",143,61,46],
    ["red_wool",160,39,34],
    ["redstone_block",175,24,5],
    ["redstone_lamp",95,54,30],
    ["redstone_lamp_on",142,101,60],
    ["redstone_ore",133,107,107],
    ["respawn_anchor_side0",39,23,62],
    ["respawn_anchor_side1",42,26,64],
    ["respawn_anchor_side2",44,28,65],
    ["respawn_anchor_side3",47,30,66],
    ["respawn_anchor_side4",49,32,68],
    ["sand",219,207,163],
    ["sandstone",216,203,155],
    ["shroomlight",240,146,70],
    ["shulker_box",139,96,139],
    ["smooth_stone",158,158,158],
    ["snow",249,254,254],
    ["soul_sand",81,62,50],
    ["soul_soil",75,57,46],
    ["sponge",195,192,74],
    ["spruce_log",58,37,16],
    ["spruce_log_top",108,80,46],
    ["spruce_planks",114,84,48],
    ["stone",125,125,125],
    ["stone_bricks",122,121,122],
    ["stripped_acacia_log",174,92,59],
    ["stripped_acacia_log_top",166,91,51],
    ["stripped_birch_log",196,176,118],
    ["stripped_birch_log_top",191,171,116],
    ["stripped_crimson_stem",137,57,90],
    ["stripped_crimson_stem_top",121,56,82],
    ["stripped_dark_oak_log",96,76,49],
    ["stripped_dark_oak_log_top",65,44,22],
    ["stripped_jungle_log",171,132,84],
    ["stripped_jungle_log_top",165,122,81],
    ["stripped_oak_log",177,144,86],
    ["stripped_oak_log_top",160,129,77],
    ["stripped_spruce_log",115,89,52],
    ["stripped_spruce_log_top",105,80,46],
    ["stripped_warped_stem",57,150,147],
    ["stripped_warped_stem_top",52,128,124],
    ["target_side",229,176,168],
    ["target_top",226,170,157],
    ["terracotta",152,94,67],
    ["tnt_side",182,88,84],
    ["tube_coral_block",49,87,206],
    ["warped_planks",43,104,99],
    ["warped_stem_top",57,103,103],
    ["warped_wart_block",22,119,121],
    ["wet_sponge",171,181,70],
    ["white_concrete",207,213,214],
    ["white_concrete_powder",225,227,227],
    ["white_glazed_terracotta",188,212,202],
    ["white_shulker_box",215,220,221],
    ["white_terracotta",209,178,161],
    ["white_wool",233,236,236],
    ["yellow_concrete",240,175,21],
    ["yellow_concrete_powder",232,199,54],
    ["yellow_glazed_terracotta",234,192,88],
    ["yellow_shulker_box",248,188,29],
    ["yellow_terracotta",186,133,35],
    ["yellow_wool",248,197,39]
]
var tolerance = 32
var color = [0, 0, 0]
var blockIndex = 0
var tempCalc = []
var similars = []
var block = [0, 2147483647]
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
const c2 = document.getElementById("blocksNeeded");
const ctx2 = c2.getContext("2d");
const blockName = document.getElementById('block');
const img = document.getElementById('src');
const drawimg = new Image();
drawimg.src = 'src.png'
var blocksNeeded = new Array()
var drawX = 0
var drawY = 0   

drawimg.onload = function() {
    ctx.drawImage(drawimg, 0, 0);
}
const url = 'http://www.google.com/intl/en_ALL/images/logo.gif'
img.onload = function() {
    c.width = img.width;
    c.height = img.height;
    var pixels = this.width * this.height
    const pixelsDiv = document.getElementById('pixels')
    if (pixels > 0) {
        pixelsDiv.textContent = 'Status: Ready to run. No. of pixels: ' + `${pixels}`
    }
}

console.log(blocks.length)
var pixelx = 0
var pixely = 0;

function getBlockOfPixel () {
    for ( let i = 0; i < 286; i++) {
        tempCalc.push(Math.abs(color[0] - blocks[blockIndex][1]))
        tempCalc.push(Math.abs(color[1] - blocks[blockIndex][2]))
        tempCalc.push(Math.abs(color[2] - blocks[blockIndex][3]))
        if (tempCalc[0] <= 45 && tempCalc[1] <= 45 && tempCalc[2] <= 45) {
            tempCalc = tempCalc[0] + tempCalc[1] + tempCalc[2]
            similars.push([blocks[blockIndex][0], tempCalc]) 
        }
        blockIndex++
        tempCalc = []
    }

    var similarslength = similars.length

    for (var i = 0; i < similarslength; i++) {
        if (similars[0][1] < block[1]) {
            block.splice(0, 1, similars[0][0])
            block.splice(1, 1, similars[0][1])
        }
        similars.shift()
    }
    console.log(block)
    blockName.insertAdjacentHTML('beforeend', `<br>${block[0]} (Similarity score to pixel: ${block[1]})`)
    var tag = document.createElement("img");
    tag.src = 'block/' + block[0] + '.png'
    var element = document.getElementById("block");
    console.log(element)
    console.log(tag)
    element.appendChild(tag);
    blocksNeeded.push(block[0])
    c2.width = c.width * 16
    c2.height = c.height * 16
    console.log(blocksNeeded)
    console.log(blocksNeeded.length)
    console.log(pixelx)
    console.log(pixely)
    if (pixelx == c.width && pixely == c.height) {
        var drawBlock = new Image()
        drawBlock.src = 'block/' + blocksNeeded[0] + '.png'
        console.log(blocksNeeded.length)
        drawBlock.onload = function() {
            for (var i = 0; i < blocksNeeded.length + 1; i++) {
                drawBlock.src = 'block/' + blocksNeeded[0] + '.png'
                console.log(blocksNeeded[0] + drawBlock.src)
                blocksNeeded.shift()
                console.log(c2 + ctx2 + drawBlock + `${drawY} ${drawX}`)
                if (drawX > c.width) {
                    drawY ++
                    drawX = 0
                }
                ctx2.drawImage(drawBlock, drawX * 16, drawY * 16)
                drawX ++
                console.log(blocksNeeded)
            }
        }
    }
}



function getColorCode () {
    color[0] = prompt('Hue')
    color[1] = prompt('Saturation')
    color[2] = prompt('Brightness')
    getBlockOfPixel()
}

function copy() {
    drawX = 0
    drawY = 0
    const ctemp = c.getContext('2d');
    var p = ctemp.getImageData(1, 1, 1, 1).data; 
    console.log(p)
    blocksNeeded = new Array()

    while (!(pixelx == c.width + 1 && pixely == c.height)) {
        console.log(`${c.width} ${c.height}`)
        if (pixelx > c.width) {
            pixely ++
            pixelx = 0
        }
        p = ctemp.getImageData(pixelx, pixely, 1, 1).data; 
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        console.log(hex)
        console.log (`${pixelx} ${pixely} ${pixels}`)
        console.log(hex)
        hex = hexToRgb(hex)
        hex = Object.values(hex);
        console.log(hex)
        color = hex;
        tempCalc = []
        similars = []
        block = [0, 2147483647]
        blockIndex = 0
        getBlockOfPixel()
        $('#color').html(hex); 
        pixelx ++   
    }
}

function debug(x, y) {
    console.log(x)
    console.log(y)
    var coord = "x=" + x + ", y=" + y;
    var ctx = c.getContext('2d');
    var p = ctx.getImageData(x, y, 1, 1).data; 
    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    console.log(hex)
    hex = hexToRgb(hex)
    hex = Object.values(hex);
    console.log(hex)
    color = hex;
    tempCalc = []
    similars = []
    block = [0, 2147483647]
    blockIndex = 0
    getBlockOfPixel()
}

$('#canvas').click(function(e) {
    var pos = findPos(this);
    var x = e.pageX - pos.x;
    var y = e.pageY - pos.y;
    console.log(x)
    console.log(y)
    var coord = "x=" + x + ", y=" + y;
    var c = this.getContext('2d');
    var p = c.getImageData(x, y, 1, 1).data; 
    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    console.log(hex)
    hex = hexToRgb(hex)
    hex = Object.values(hex);
    console.log(hex)
    color = hex;
    tempCalc = []
    similars = []
    block = [0, 2147483647]
    blockIndex = 0
    getBlockOfPixel()
    $('#color').html(coord + "<br>" + hex);
});

/* built in funcs */
function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomColor() {
	return `rgb(${randomInt(256)}, ${randomInt(256)}, ${randomInt(256)})`
}

function rgb2hsv (r, g, b) {
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
    diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(percentRoundFn(s * 100)),
        v: Math.round(percentRoundFn(v * 100))
    };
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }