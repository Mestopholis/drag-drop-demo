import { Component } from '@angular/core';
import { FileUploadService } from './file.upload.service';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upload-docs';
  public uploadedFiles: Array<File> = [];

  constructor(
    private fileUploadService: FileUploadService
    ) { }
    public clear(): void {
        this.uploadedFiles = [];
    }

    public fileUploadControl = new FileUploadControl();

    public uploadFiles() {

      for (const droppedFile of this.uploadedFiles) {
        console.log(droppedFile.name);
        console.log(droppedFile.size);
        console.log(droppedFile.type);
        
        const formData = new FormData();

        formData.append("myFile", droppedFile);

        this.fileUploadService.upload(droppedFile).subscribe((event: any) => {
          console.log("Handle file upload complete here.")
        });
      }
  }

}
