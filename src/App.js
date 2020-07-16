import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'
import ThemeContext from './theme-context'
import ThemedBar from './components/ThemedBar'
const tags = ['恐龙', '足球小子']
const themes = {
  light: {
    classnames: 'btn btn-primary',
    bgColor: '#eeeeee',
    color: '#000'
  },
  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222222',
    color: '#fff'
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is my first reply'],
      theme: 'light'
    }
    this.addComment = this.addComment.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
  }
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  changeTheme(theme) {
    this.setState({
      theme
    })
  }
  render() {
    const { comments } = this.state;
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
        </a>
          </header>
          {/* <NameCard name="king" number={12345} isHuman tags={tags} /> */}
          <CommentList comments={comments} />
          <CommentBox
            commentsLength={comments.length}
            onAddComment={this.addComment} />
          <a href="#theme-switcher" className="btn btn-light"
            onClick={() => {
              this.changeTheme('light')
            }}>
            浅色主题
          </a>
          <a href="#theme-switcher" className="btn btn-secondary"
            onClick={() => {
              this.changeTheme('dark')
            }}>
            深色主题
          </a>
          <ThemedBar />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
