class GalleryManager {
    constructor() {
        this.images = [];
    }

    addImage(image) {
        this.images.push(image);
    }

    removeImage(image) {
        this.images = this.images.filter(img => img !== image);
    }

    getImages() {
        return this.images;
    }

    clearGallery() {
        this.images = [];
    }
}