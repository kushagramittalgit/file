import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  selectedImage!: File;

  constructor(private http: HttpClient) { }

  onFileChange(event: any) {
    this.selectedImage = event.target.files[0];
  }
  uploadImage(event: Event) {
    event.preventDefault(); // Prevent form submission and page refresh
  
    if (this.selectedImage) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const binaryString = reader.result as string;
        const base64Image = btoa(binaryString);
  
        // Create a JSON object with the base64 image
        const imageObject = { image: base64Image };
  
        console.log('Image object:', imageObject);
  
        // Send the imageObject to the server
        this.http.post('http://your-api-url', imageObject)
          .subscribe(
            response => {
              console.log('Image uploaded successfully!', response);
              // Handle the response from the server
            },
            error => {
              console.error('Error uploading image:', error);
              // Handle any errors that occur during the upload
            }
          );
      };
  
      reader.readAsBinaryString(this.selectedImage);
    }
  }
  
}

