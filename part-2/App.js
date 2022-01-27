function App(){
    return (
        <div>
            <Tweet
            name="Kitty Coding"
            username="kitty1999"
            date={new Date().toDateString()}
            message="Hello, World!"
            />
            <Tweet
            name="Jason Guo"
            username="guo1999"
            date={new Date().toDateString()}
            message="Hello, Guo!"
            />
            <Tweet
            name="Tiger Java"
            username="catty1999"
            date={new Date().toDateString()}
            message="Fried chicken!"
            />
        </div>
    );
}