import React, { Component } from "react";
import "./Post.css";

    class Post extends Component {
      render() {
        return <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src="user.png" alt="Chris" />
                </div>
                <div className="Post-user-nickname">
                  <span>Chris</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Icon Living" src="bali.jpg" />
              </div>
            </div>
            <div className="Post-caption">
              <strong>Chris</strong> Moving the community!
            </div>
          </article>;
        }
    }
    export default Post;