import luigiImg from './luigi.png';
function Luigi({ isActive, isWinner }){
    return(
        <div className="w-40 sm:w-56 flex justify-center items-center">
            <img 
                src={luigiImg} 
                alt="luigi" 
                className={`h-64 object-contain drop-shadow-xl hover:scale-105 transition-transform ${isActive ? 'scale-125 drop-shadow-2xl':'scale-90 opacity-60'} ${isWinner?'animate-bounce':''}`} 
            />
        </div>
    )
}
export default Luigi;