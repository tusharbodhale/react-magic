var CodePanel = React.createClass({
    getInitialState: function() {
      return {value: this.props.text};
    },
    localHandleClick: function() {
      this.props.localHandleClick(this.textInput.value);
    },
    render: function() {
      return (
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-9">
              <h2>Code</h2>
            </div>
            <div className="col-md-3">
              <button onClick={this.localHandleClick} className="btn run-button">Run</button>
            </div>
          </div>
          <textarea className="form-control code-panel"rows="30"  defaultValue={this.state.value} id="textBox" placeholder="Write your code here"
          ref={(input) => { this.textInput = input; }}
          ></textarea>
        </div>
      )
    }
  });

  var AnimationPanel = React.createClass({
    
    render: function() {
      return (
        <div className="col-md-6">
          <h2>Animation</h2>
          <div className="panel panel-default animate-panel">
            <div className="panel-body">
              <canvas id="myCanvas" width="500" height="300">
</canvas>
            </div>
          </div>
        </div>
      )
    }
  });

  var AssetBox = React.createClass({
    
    render: function() {
      return (
        <div className="col-md-6">
          <h2>Asset Box</h2>
          <div className="panel panel-default lib-panel">
            <div className="panel-body">
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#library1">Avatar</a></li>
                <li><a data-toggle="tab" href="#library2">Sound</a></li>
                <li><a data-toggle="tab" href="#library3">Video</a></li>
              </ul>

              <div className="tab-content">
                <div id="library1" className="tab-pane fade in active">
                  <h3>Avatars</h3>
                  <div className="avatar-icons">
                    <div className="icon">
                      <object type="image/svg+xml" data="assets/images/apple.svg">
                        Your browser does not support SVG
                      </object>
                      <label>apple</label>
                    </div>
                    <div className="icon">
                      <object type="image/svg+xml" data="assets/images/sun.svg">
                        Your browser does not support SVG
                      </object>
                      <label>sun</label>
                    </div>
                    <div className="icon">
                      <object type="image/svg+xml" data="assets/images/moon.svg">
                        Your browser does not support SVG
                      </object>
                      <label>moon</label>
                    </div>
                    <div className="icon">
                      <object type="image/svg+xml" data="assets/images/earth.svg">
                        Your browser does not support SVG
                      </object>
                      <label>earth</label>
                    </div>
                    <div className="icon">
                      <object type="image/svg+xml" data="assets/images/grasshopper.svg">
                        Your browser does not support SVG
                      </object>
                      <label>grasshopper</label>
                    </div>
                    <div className="icon">
                      <object type="image/svg+xml" data="assets/images/chhota_bheem.svg">
                        Your browser does not support SVG
                      </object>
                      <label>chhota_bheem</label>
                    </div>
                  </div>
                </div>
                <div id="library2" className="tab-pane fade">
                  <h3>Sound</h3>
                  <p>Some content in menu 1.</p>
                </div>
                <div id="library3" className="tab-pane fade">
                  <h3>Videos</h3>
                  <p>Some content in menu 2.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  });

  var Documentation = React.createClass({
    
    render: function() {
      return (
        <div className="col-md-6">
          <h2>API Reference</h2>
          <div className="panel panel-default lib-panel">
            <div className="panel-body">
              ..documentation
            </div>
          </div>
        </div>
      )
    }
  });


  /*Main Component*/
  var Main = React.createClass({
    getInitialState: function() {
      return {text: `//code for user
      myAvatar =new Avatar("earth");
      myAvatar.appear(200,150);
      myAvatar2 =new Avatar("sun");
      myAvatar2.appear(180,120);
      myAvatar.revolve(300,6000);`};
    },
    handleClick: function(newValue) {
      init();
      this.setState({ text: eval(newValue) });
    },
    render: function() {
      return (
        <div className="container">
          <div className="row">
            <CodePanel localHandleClick={this.handleClick} text={this.state.text}/>
            <AnimationPanel text={this.state.text}/>              
          </div>
          <div className="row">
            <AssetBox/>
            <Documentation/>              
          </div>
        </div>
      )
    }
  })

  ReactDOM.render(<Main />, document.getElementById("root"));