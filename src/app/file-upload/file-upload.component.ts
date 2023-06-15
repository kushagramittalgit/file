import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  constructor(private http: HttpClient) { }
  imageChangedEvent: any = "";
  croppedImage: any = "";

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(this.croppedImage);
  }
  imageLoaded() {

  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
   alert("image loading failed")
  }
  async uploadImage(event: Event) {
    event.preventDefault(); // Prevent form submission and page refresh
  
    if (this.croppedImage) {
      const base64Image = this.croppedImage;
  
      const imageObject = { image: base64Image };
  
      console.log('Image object:', imageObject);

      // this.http.post('http://your-api-url', imageObject)
      //   .subscribe(
      //     response => {
      //       console.log('Image uploaded successfully!', response);
       
      //     },
      //     error => {
      //       console.error('Error uploading image:', error);
         
      //     }
        // );
    }
  }
}

