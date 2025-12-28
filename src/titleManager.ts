
type VisibilityState = 'visible' | 'hidden' | 'prerender' | 'unloaded';


document.addEventListener('visibilitychange', () => {
    const currentState = document.visibilityState as VisibilityState;
    if(currentState === 'hidden'){
        console.log('come back :((');
        document.title = 'come back :((';
    }
    else if(currentState === 'visible'){
        console.log('hiii');
        document.title = 'omg HIIIII'
    }
});