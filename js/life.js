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


  $('td').click(function(){
    if (!game_started)
    {
      $(this).toggleClass('on');
    }
  });

  $('#btn1').click(function(){
    $(this).attr('disabled',true);
    if (!game_started)
    {
      start_game(); 
    }
    game_started = true; 
  });

  $('#btn2').click(function(){
    change_styles(pulsar); 
  });

  $('#btn3').click(function(){
    change_styles(gun); 
  });

//End doc.ready  
});


function start_game()
{
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
// this seems to be scanning correctly

function start_int(mx)
{
  var numnum = parseInt($('#speed').val()); 
  var the_mx = mx; 
  setInterval(function(){
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


