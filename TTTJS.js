// JavaScript Document
var allsp = document.getElementsByClassName('space')
var allx = document.getElementsByClassName('x')
var all0 = document.getElementsByClassName('o')

var msgX = document.getElementById('msgX')
var msgY = document.getElementById('msgY')
var msgXW = document.getElementById('msgXW')
var msgYW = document.getElementById('msgYW')
var msgD = document.getElementById('msgD')


var i00sp = document.getElementById('00space')
var i01sp = document.getElementById('01space')
var i02sp = document.getElementById('02space')
var i10sp = document.getElementById('10space')
var i11sp = document.getElementById('11space')
var i12sp = document.getElementById('12space')
var i20sp = document.getElementById('20space')
var i21sp = document.getElementById('21space')
var i22sp = document.getElementById('22space')

var i00x = document.getElementById('00x')
var i01x = document.getElementById('01x')
var i02x = document.getElementById('02x')
var i10x = document.getElementById('10x')
var i11x = document.getElementById('11x')
var i12x = document.getElementById('12x')
var i20x = document.getElementById('20x')
var i21x = document.getElementById('21x')
var i22x = document.getElementById('22x')

var i000 = document.getElementById('000')
var i010 = document.getElementById('010')
var i020 = document.getElementById('020')
var i100 = document.getElementById('100')
var i110 = document.getElementById('110')
var i120 = document.getElementById('120')
var i200 = document.getElementById('200')
var i210 = document.getElementById('210')
var i220 = document.getElementById('220')

var flag = 0
var count = 0
var winner = ''
var turn = 'x'

var check = [[1,2,3],[4,5,6],[7,8,9]]


var played = [[0,0,0],[0,0,0],[0,0,0]]

function play(r,c){
	var find = String(r).concat(String(c))

	if(played[r][c]==0 && winner!='x' && winner!='y')
	{
		played[r][c] = 1
		if(turn=='x')
		{
			turn = 'o'
			
			switch (find)
			{
				case '00':
					i00sp.style.display = 'none'
					i00x.style.display = 'block'
					i000.style.display = 'none'
					check[0][0] = 'x'
					count++
					console.log(r,c,check[r][c])
					msgX.style.display = 'none'
					msgY.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '01':
					i01sp.style.display = 'none'
					i01x.style.display = 'inline-block'
					i010.style.display = 'none'
					check[0][1] = 'x'
					count++
					console.log(r,c,check[r][c])
					msgX.style.display = 'none'
					msgY.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '02':
					i02sp.style.display = 'none'
					i02x.style.display = 'inline-block'
					i020.style.display = 'none'
					check[0][2] = 'x'
					count++
					console.log(r,c,check[r][c])
					msgX.style.display = 'none'
					msgY.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '10':
					i10sp.style.display = 'none'
					i10x.style.display = 'inline-block'
					i100.style.display = 'none'
					check[1][0] = 'x'
					count++
					console.log(r,c,check[r][c])
					msgX.style.display = 'none'
					msgY.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '11':
					i11sp.style.display = 'none'
					i11x.style.display = 'inline-block'
					i110.style.display = 'none'
					check[1][1] = 'x'
					count++
					console.log(r,c,check[r][c])
					msgX.style.display = 'none'
					msgY.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '12':
					i12sp.style.display = 'none'
					i12x.style.display = 'inline-block'
					i120.style.display = 'none'
					check[1][2] = 'x'
					count++
					console.log(r,c,check[r][c])
					msgX.style.display = 'none'
					msgY.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '20':
					i20sp.style.display = 'none'
					i20x.style.display = 'inline-block'
					i200.style.display = 'none'
					check[2][0] = 'x'
					count++
					console.log(r,c,check[r][c])
					msgX.style.display = 'none'
					msgY.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '21':
					i21sp.style.display = 'none'
					i21x.style.display = 'inline-block'
					i210.style.display = 'none'
					check[2][1] = 'x'
					count++
					console.log(r,c,check[r][c])
					msgX.style.display = 'none'
					msgY.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '22':
					i22sp.style.display = 'none'
					i22x.style.display = 'inline-block'
					i220.style.display = 'none'
					check[2][2] = 'x'
					count++
					console.log(r,c,check[r][c])
					msgX.style.display = 'none'
					msgY.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;	
				
			}
		}
		
		else if(turn=='o')
		{
			turn = 'x'
			
			switch (find)
			{
				case '00':
					i00sp.style.display = 'none'
					i000.style.display = 'inline-block'
					i00x.style.display = 'none'
					check[0][0] = 'o'
					count++
					console.log(r,c,check[r][c])
					msgY.style.display = 'none'
					msgX.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '01':
					i01sp.style.display = 'none'
					i010.style.display = 'inline-block'
					i01x.style.display = 'none'
					check[0][1] = 'o'
					count++
					console.log(r,c,check[r][c])
					msgY.style.display = 'none'
					msgX.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '02':
					i02sp.style.display = 'none'
					i020.style.display = 'inline-block'
					i02x.style.display = 'none'
					check[0][2] = 'o'
					count++
					console.log(r,c,check[r][c])
					msgY.style.display = 'none'
					msgX.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '10':
					i10sp.style.display = 'none'
					i100.style.display = 'inline-block'
					i10x.style.display = 'none'
					check[1][0] = 'o'
					count++
					console.log(r,c,check[r][c])
					msgY.style.display = 'none'
					msgX.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '11':
					i11sp.style.display = 'none'
					i110.style.display = 'inline-block'
					i11x.style.display = 'none'
					check[1][1] = 'o'
					count++
					console.log(r,c,check[r][c])
					msgY.style.display = 'none'
					msgX.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '12':
					i12sp.style.display = 'none'
					i120.style.display = 'inline-block'
					i12x.style.display = 'none'
					check[1][2] = 'o'
					count++
					console.log(r,c,check[r][c])
					msgY.style.display = 'none'
					msgX.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '20':
					i20sp.style.display = 'none'
					i200.style.display = 'inline-block'
					i20x.style.display = 'none'
					check[2][0] = 'o'
					count++
					console.log(r,c,check[r][c])
					msgY.style.display = 'none'
					msgX.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '21':
					i21sp.style.display = 'none'
					i210.style.display = 'inline-block'
					i21x.style.display = 'none'
					check[2][1] = 'o'
					count++
					console.log(r,c,check[r][c])
					msgY.style.display = 'none'
					msgX.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;
				case '22':
					i22sp.style.display = 'none'
					i220.style.display = 'inline-block'
					i22x.style.display = 'none'
					check[2][2] = 'o'
					count++
					console.log(r,c,check[r][c])
					msgY.style.display = 'none'
					msgX.style.display = 'inline-block'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
					break;	
				
			}
		}

	}
	for(var i=0;i<3;i++)
	{
		if(check[i][0]==check[i][1] && check[i][1]==check[i][2])
		{
			console.log('we have a winner')
			if(check[i][0]=='x')
			{
				winner = 'x'
				flag = 1	
				msgY.style.display = 'none'
					msgXW.style.display = 'inline-block'
					msgX.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'
			}
			else
			{
				winner = 'y'
				flag = 1	
				msgY.style.display = 'none'
					msgYW.style.display = 'inline-block'
					msgX.style.display = 'none'
					msgXW.style.display = 'none'
					msgD.style.display = 'none'
			}
		}
	}
	
	for(var i=0;i<3;i++)
	{
		if(check[0][i]==check[1][i] && check[1][i]==check[2][i])
		{
			console.log('we have a winner')
			if(check[0][i]=='x')
			{
				winner = 'x'
				flag = 1
				msgY.style.display = 'none'
					msgXW.style.display = 'inline-block'
					msgX.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'	
			}
			else
			{
				winner = 'y'
				flag = 1
				msgY.style.display = 'none'
					msgYW.style.display = 'inline-block'
					msgX.style.display = 'none'
					msgXW.style.display = 'none'
					msgD.style.display = 'none'	
			}

		}
	}
	
	
	if(check[0][0]==check[1][1] && check[1][1]==check[2][2])
	{
		console.log('we have a winner')
		if(check[0][0]=='x')
		{
			winner = 'x'
			flag = 1
			msgY.style.display = 'none'
					msgXW.style.display = 'inline-block'
					msgX.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'	
		}
		else
		{
			winner = 'y'
			flag = 1	
			msgY.style.display = 'none'
					msgYW.style.display = 'inline-block'
					msgX.style.display = 'none'
					msgXW.style.display = 'none'
					msgD.style.display = 'none'
		}

	}
	
	
	
	if(check[0][2]==check[1][1] && check[1][1]==check[2][0])
	{
		console.log('we have a winner')
		if(check[1][1]=='x')
			{
				winner = 'x'
				flag = 1
				msgY.style.display = 'none'
					msgXW.style.display = 'inline-block'
					msgX.style.display = 'none'
					msgYW.style.display = 'none'
					msgD.style.display = 'none'	
			}
			else
			{
				winner = 'y'
				flag = 1
				msgY.style.display = 'none'
					msgYW.style.display = 'inline-block'
					msgX.style.display = 'none'
					msgXW.style.display = 'none'
					msgD.style.display = 'none'	
			}
	}
	
	if(count==9 && flag==0)
	{
		console.log('match draw')
		msgY.style.display = 'none'
					msgD.style.display = 'inline-block'
					msgX.style.display = 'none'
					msgXW.style.display = 'none'
					msgYW.style.display = 'none'
	}

}




function reset()
{
	i00sp.style.display = 'block'
	i00x.style.display = 'none'
	i000.style.display = 'none'
	i01sp.style.display = 'block'
	i01x.style.display = 'none'
	i010.style.display = 'none'
	i02sp.style.display = 'block'
	i02x.style.display = 'none'
	i020.style.display = 'none'
	i10sp.style.display = 'block'
	i10x.style.display = 'none'
	i100.style.display = 'none'
	i11sp.style.display = 'block'
	i11x.style.display = 'none'
	i110.style.display = 'none'
	i12sp.style.display = 'block'
	i12x.style.display = 'none'
	i120.style.display = 'none'
	i20sp.style.display = 'block'
	i20x.style.display = 'none'
	i200.style.display = 'none'
	i21sp.style.display = 'block'
	i21x.style.display = 'none'
	i210.style.display = 'none'
	i22sp.style.display = 'block'
	i22x.style.display = 'none'
	i220.style.display = 'none'
	played = [[0,0,0],[0,0,0],[0,0,0]]
	check = [[1,2,3],[4,5,6],[7,8,9]]
	flag = 0
	count = 0
	winner = ''
	msgY.style.display = 'none'
	msgX.style.display = 'inline-block'
	msgXW.style.display = 'none'
	msgYW.style.display = 'none'
	msgD.style.display = 'none'
}