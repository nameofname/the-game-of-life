// CONWAY'S THE GAME OF LIFE

/*
 For a space that is 'populated':
 Each cell with one or no neighbors dies, as if by loneliness.
 Each cell with four or more neighbors dies, as if by overpopulation.
 Each cell with two or three neighbors survives.

 For a space that is 'empty' or 'unpopulated'
 Each cell with three neighbors becomes populated.
 */

$(document).ready(function(){


    // create a function that lets the user click the squares to generate the first matrix. Collect the matrix from the table and feed it to new_mx, then feed that result to change_styles
    var game_started = false;
    var pulsar = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,], [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,], [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,], [false,false,false,false,false,true,true,true,false,false, false, true, true, true, false, false, false, false, false, false,], [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,], [false,false,false,true,false,false,false,false,true,false, true, false, false, false, false, true, false, false, false, false,], [false,false,false,true,false,false,false,false,true,false, true, false, false, false, false, true, false, false, false, false,], [false,false,false,true,false,false,false,false,true,false, true, false, false, false, false, true, false, false, false, false,], [false,false,false,false,false,true,true,true,false,false, false, true, true, true, false, false, false, false, false, false,], [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,], [false,false,false,false,false,true,true,true,false,false, false, true, true, true, false, false, false, false, false, false,], [false,false,false,true,false,false,false,false,true,false, true, false, false, false, false, true, false, false, false, false,], [false,false,false,true,false,false,false,false,true,false, true, false, false, false, false, true, false, false, false, false,], [false,false,false,true,false,false,false,false,true,false, true, false, false, false, false, true, false, false, false, false,], [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,], [false,false,false,false,false,true,true,true,false,false, false, true, true, true, false, false, false, false, false, false,], [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,], [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,], [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,]]

    var gun = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,false,false,true,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,true,false,true,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,true,true,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,true,true,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,true,true,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,true,false,true,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,false,false,true,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,],
        [false,false,false,false,false,false,false,false,false,false, false, false, false, false, false, false, false, false, false, false,]];


    var moused = false;
    $(document).on('mousedown', function(){
        moused = true;
    });

    $(document).on('mouseup', function(){
        moused = false;
    });

    $('table').on('mouseenter', 'td', function(){
        if (!game_started && moused)
        {
            $(this).toggleClass('on');
        }
    });

    // Controls: start, pause, clear, follow:
    $('#start').click(function(){
        $(this).attr('disabled',true);
        if (!game_started)
        {
            start_game();
        }
        game_started = true;
    });

    $('#clear').click(function(){
        stop_game();
        $('td').removeClass('on');
        game_started = false;
    });

    $('#pause').click(function(){
        stop_game();
        game_started = false;
    });

    // Pre-loaded styles on click event
    $('#pulsar').click(function(){ preload_styles(pulsar); });
    $('#gun').click(function(){ preload_styles(gun); });

    // Change the number of cells.
    $('.size_change').click(function(){
        new_table();
    });

//End doc.ready
});

var namespaced_time;

// start the game.
function start_game() {
    var mx = [];
    $('tr').each(function(y){
        mx.push([]);
        $(this).find('td').each(function(x){
            if ($(this).hasClass('on'))
            {
                mx[y].push(true);
            }
            else
            {
                mx[y].push(false);
            }
        });
    });
    start_int(mx);
}

// stop (pause) the game
function stop_game() {
    clearInterval(namespaced_time);
}

// start the interval based on user input- time.
function start_int(mx)
{
    var numnum = parseInt($('#speed').val());
    var the_mx = mx;
    namespaced_time = setInterval(function(){
        the_mx = new_mx(the_mx);
        change_styles(the_mx);
    }, numnum);

}


// create a function to take a matrix and assign styles to the table
function change_styles(mx)
{
    $('td').removeClass('on');
    for (y in mx)
    {
        for (x in mx[y])
        {
            if (mx[y][x] == true)
            {
                $('#' + y).find('.'+x).addClass('on');
            }
        }
    }
}

// insert preloaded array into table
function preload_styles(arr) {
    var w = arr[0].length -1;
    var h = arr.length -1;
    console.log(w);
    var tw = $('table tr#0 td').length;
    console.log(tw);
    var new_arr = [];
    // first calculate the width of the table relative to the wdth of the array,
    // then the width of one side (minus 1 if the diff is odd)
    if (tw >= w && tw >= h)
    {
        load_up();
    }
    else
    {
        alert('the table size you have chosen is a bit too small for this pattern');
    }
    function load_up()
    {
        var diffX = tw - w;
        var diffY = tw - h;
        var side;
        var top_side;
        if (diffX % 2 != 0)
        {
            diffX -= 1;
        }
        if (diffY % 2 != 0)
        {
            diffY -= 1;
        }
        side = diffX / 2;
        top_side = diffY / 2;
        console.log('side: ' + side);
        console.log(top_side);
        calc = top_side + w;
        console.log('a calc: ' +  calc);
        // then add the top and sides, and add the contents of the array in the middle
        var incrY = 0;
        for (var y=0; y<tw; y++)
        {
            new_arr[y] = [];
            console.log('this is y: ' + y);
            if (top_side < y && y < (top_side + w))
            {
                incrY ++;
            }
            var incrX = 0;
            for (x=0; x<tw; x++)
            {
                // if you are in the top or bottom margins...
                if (y < top_side && y > (top_side + w))
                {
                    new_arr[y][x] = false;
                }
                //else if (top_side < y > (top_side + w))
                // else you are in the middle on the y axis
                else
                {
                    // if you are in the x- margin
                    if (side < x && x < (side + w))
                    {
                        new_arr[y][x] = arr[incrY][incrX];
                        incrX ++;
                    }
                    else
                    {
                        //console.log('icrY: ' + incrY);
                        new_arr[y][x] = false;
                    }
                }
            }
        }
    }
    change_styles(new_arr);
}

// create a function to take the previous matrix and bases on the rules of the game, come up with the next matrix
function new_mx(mx)
{
    var new_mx = [];
    for (y in mx)
    {
        new_mx[y] = [];
        for (x in mx[y])
        {
            //as you can see, we have a full set
            var n = get_neighbors(mx, x, y);
            if (mx[y][x] == true)
            {
                if (n > 1 && n < 4)
                {
                    // then live
                    new_mx[y].push(true);
                }
                else
                {
                    // then die
                    new_mx[y].push(false);
                }
            }
            else if (mx[y][x] == false)
            {
                if (n == 3)
                {
                    new_mx[y].push(true);
                }
                else
                {
                    new_mx[y].push(false);
                }
            }
        }
    }
    console.log('the interval has advanced');
    return new_mx;
}

// gets neighbors from matrix
function get_neighbors(mx, _x, _y)
{
    var x = parseInt(_x);
    var y = parseInt(_y);
    var n = 0;
    for (y1 = y-1; y1 <= y+1; y1++)
    {
        for (x1 = x-1; x1 <= x+1; x1++)
        {
            var y2 = in_range(y1, mx.length-1);
            var x2 = in_range(x1, mx[0].length-1);
            if (mx[y2][x2] == true && not_equiv(x2,y2))
            {
                n ++;
            }
        }
    }
    function in_range(num, len)
    {
        if (num == -1)
        {
            num = len;
        }
        else if (num > len)
        {
            num = 0;
        }
        return num;
    }
    function not_equiv(x2,y2)
    {
        if (x2 == x && y2 == y)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    return n;
}

// create a table the number of cells specified.
function new_table() {
    $('table').empty();
    var y = parseInt($('input#cell_num').val());
    //var table = $('<table>');
    for (i=0; i<y; i++)
    {
        var new_tr = $('<tr>').attr({'class' : 'y' , 'id' : i});
        for (x=0; x<y; x++)
        {
            new_tr.append($('<td>').attr('class',x));
        }
        $('table').append(new_tr);
    }
}



/*

 this is what needs to be done:

 1) choose from known patterns
 - for this i need to have the patterns, and be able to wrap them in the middle of larger matricies the size of the table chosen

 2) choose the speed - you can already do this

 3) clear, stop, start.

 4) choose the number of cells

 5) i think there may be an opportunity for a cpu like drop down here.  yes, a tool bar.  choose from patterns, and configs.  the stop, start, clear will be buttons along the bottom.  Ok, break.  For the configs, I think a fly out menu would be best.  Awesome.

 6) the user should be able to download a copy of their original design and load it up later. ho lee fuk. yes.

 7) lastly i think that the game should not wrap, or give the user the OPTION to wrap.  FUCK YES- this goes in the configs.

 -------------------
 - need to limit the number of rows to like 100, maybe 200 and i can have the script detect the nubmer of rows and size down the table if appropriate
 - need to add more patterns
 - need to organize the whole thing into a drop down
 - need to make it so that cells can be selected on any mouse down.

 FOR THE UI, I GOT IT:
 the control panel will be a menu bar up top, but it will hover out of sight so that you can just come up to the top and either click a transparent thingy and it will drop down, or it becumes avaialable when you hover close to there. I think i should do both so that users can full screen it and just push the mouse to the top, or if they are not in full screen, they can click the drop down tab.

 time to do the working on the ol' UI.

 I will mons indeedly have john conway's the game of life in the logo sppt, and 3 drop downs.

 1- configure
 2- patterns
 3- import/export.  The user should be able to make a pattern, and save it.  Then download if wanted.  Later they should be able to upload it, and shit.

 Then there will be a control panel down at the bottom.  Start, Pause, Clear.
 The control buttons should have little hover tooltips.

 These will be the configs:
 - wrap
 - number of cells (size)
 - speed


 '




 */
