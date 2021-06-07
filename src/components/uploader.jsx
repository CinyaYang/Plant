import React, { Component } from 'react';
import '../css/form.css';

class Uploader extends Component {
  state = {
    files: [],
    text: ''
  };

  constructor(props) {
    super(props);
    this.state.files = props.files;
    this.state.text = props.text;

    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(e) {}

  render() {
    const onFileChange = e => {
      this.props.uploadFileHandler(e.target.files);

      //   for (let i = 0; i < e.target.files.length; i++) {
      //     this.state.fileNames = [
      //       ...this.state.fileNames,
      //       e.target.files[i].name
      //     ];
      //   }
    };

    // const onSubmit = e => {
    //   e.preventDefault();
    //   const formdata = new FormData();
    //   formdata.append('file', file);
    // };

    return (
      <div className="input-container">
        <input type="file" id="real-input" onChange={onFileChange} multiple />
        <label className="browse-btn" htmlFor="real-input">
          Browse Files
        </label>
        <span className="file-info">{this.state.text}</span>
      </div>
    );
  }
}

export default Uploader;
