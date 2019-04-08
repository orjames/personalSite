import React, { Component } from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import resume from './data/resumeORJ.pdf';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className='resume'>
        <Document
          file={resume}
          onLoadSuccess={this.onDocumentLoadSuccess.bind(this)}
        >
          <Page pageNumber={1} renderMode='svg' />
        </Document>
      </div>
    );
  }
}

export default Resume;
