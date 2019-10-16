// JavaScript Document
var comp_score = 0
var user_score = 0
var rck = document.getElementsByClassName('rock')
var ppr = document.getElementsByClassName('paper')
var scr = document.getElementsByClassName('scissor')
var msg = document.getElementById('disp')
var cs = document.getElementById('cs')
var ps = document.getElementById('ps')
function user_select(x)
{
	var users_choice = x;
	console.log('user select ',users_choice)
	comp_select(users_choice)
		}
function comp_select(users_choice){
	var temp_choice = Math.floor(Math.random() * 3)
	if(temp_choice==0){comp_choice = 'r'}
	if(temp_choice==1){comp_choice = 'p'}
	if(temp_choice==2){comp_choice = 's'}
	var combination = users_choice + comp_choice
	show_results(combination)
	}
	
function show_results(comb){
		switch (comb){
			case 'rr':
				msg.innerHTML = 'TIEE!!!!You selected ROCK and comp selected ROCK'
				cs.innerHTML = comp_score
				ps.innerHTML = user_score
				break
			case 'rp':
				msg.innerHTML = 'LOSS!!!!You selected ROCK and comp selected PAPER'
				comp_score += 1 
				cs.innerHTML = comp_score
				ps.innerHTML = user_score
				break
			case 'rs':
				msg.innerHTML = 'WIN!!!You selected ROCK and comp selected SCISSOR'
				user_score += 1 
				cs.innerHTML = comp_score
				ps.innerHTML = user_score
				break
			case 'pp':
				msg.innerHTML = 'TIEE!!!!You selected PAPER and comp selected PAPER'
				cs.innerHTML = comp_score
				ps.innerHTML = user_score
				break
			case 'ps':
				msg.innerHTML = 'LOSS!!!!You selected PAPER and comp selected SCISSOR'
				comp_score += 1 
				cs.innerHTML = comp_score
				ps.innerHTML = user_score
				break
			case 'pr':
				msg.innerHTML = 'WIN!!!You selected PAPER and comp selected ROCK'
				user_score += 1 
				cs.innerHTML = comp_score
				ps.innerHTML = user_score
				break
			case 'ss':
				msg.innerHTML = 'TIE!!You selected SCISSOR and comp selected SCISSOR'
				cs.innerHTML = comp_score
				ps.innerHTML = user_score
				break
			case 'sr':
				msg.innerHTML = 'LOSS!!!!You selected SCISSOR and comp selected ROCK'
				comp_score += 1 
				cs.innerHTML = comp_score
				ps.innerHTML = user_score
				break
			case 'sp':
				msg.innerHTML = 'WIN!!!You selected SCISSOR and comp selected PAPER'
				user_score += 1 
				cs.innerHTML = comp_score
				ps.innerHTML = user_score
				break
			}
	}