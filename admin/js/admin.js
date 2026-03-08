class AdminGallery {
    constructor() {
        this.images = [];
    }

    addImage(image) {
        this.images.push(image);
    }

    removeImage(image) {
        this.images = this.images.filter(img => img !== image);
    }

    listImages() {
        return this.images;
    }

    clearGallery() {
        this.images = [];
    }
}

// Example usage:
const gallery = new AdminGallery();
// gallery.addImage('image1.jpg');
// console.log(gallery.listImages());