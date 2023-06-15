import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File; }
    submitForm() {
      if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageBase64 = reader.result as string;
          const imageData = { image: imageBase64 };
          this.uploadImage(imageData);
        };
        reader.readAsDataURL(this.selectedFile);
      }
    }
    uploadImage(imageData: any) {
      this.http.post<any>('YOUR_UPLOAD_URL', imageData).subscribe(
        response => {
          console.log('Image uploaded successfully!', response);
        },
        error => {
          console.error('Error uploading image:', error);
        }
      );
    }
}

