document.addEventListener('DOMContentLoaded', function() {
    // التعامل مع نموذج البحث
    const filterForm = document.getElementById('filterForm');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const category = document.getElementById('category').value;
            const priceRange = document.getElementById('priceRange').value;
            console.log(`بحث: ${category}, نطاق السعر: ${priceRange}`);
        });

        const categorySelect = document.getElementById('category');
        const priceRangeInput = document.getElementById('priceRange');
        
        if (categorySelect) {
            categorySelect.addEventListener('change', function() {
                console.log(`تم اختيار النوع: ${categorySelect.value}`);
            });
        }

        if (priceRangeInput) {
            priceRangeInput.addEventListener('input', function() {
                console.log(`نطاق السعر المدخل: ${priceRangeInput.value}`);
            });
        }
    }

    // التعامل مع نموذج إضافة منتج
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('تم إضافة المنتج بنجاح');
        });

        const previewButton = document.getElementById('previewButton');
        if (previewButton) {
            previewButton.addEventListener('click', function() {
                const productName = document.getElementById('productName').value;
                const condition = document.getElementById('condition').value;
                const price = document.getElementById('price').value;
                const imageCount = document.getElementById('images').files.length;

                if (!productName || !condition || !price || imageCount === 0) {
                    alert('يرجى ملء جميع الحقول وإضافة صورة');
                    return;
                }

                alert(`معاينة المنتج:\nاسم المنتج: ${productName}\nالحالة: ${condition}\nالسعر: ${price}\nعدد الصور: ${imageCount}`);
            });
        }

        const imageInput = document.getElementById('images');
        const imagePreview = document.getElementById('imagePreview');
        
        if (imageInput) {
            imageInput.addEventListener('change', function() {
                imagePreview.innerHTML = '';
                const files = this.files;
                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        imagePreview.appendChild(img);
                    };
                    reader.readAsDataURL(files[i]);
                }
            });
        }
    }

    // التعامل مع نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('شكراً لتواصلك معنا! سنرد على رسالتك في أقرب وقت ممكن.');
                contactForm.reset();
            } else {
                alert('يرجى ملء جميع الحقول.');
            }
        });
    }

    // التعامل مع أزرار الدفع والتوصيل
    const paymentButtons = document.querySelectorAll('.payment-button');
    if (paymentButtons.length) {
        paymentButtons.forEach(button => {
            button.addEventListener('click', function() {
                paymentButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                alert(`تم اختيار طريقة الدفع: ${this.dataset.method}`);
            });
        });
    }

    const shippingButtons = document.querySelectorAll('.shipping-button');
    if (shippingButtons.length) {
        shippingButtons.forEach(button => {
            button.addEventListener('click', function() {
                shippingButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                alert(`تم اختيار طريقة التوصيل: ${this.dataset.method}`);
            });
        });
    }

    // التعامل مع زر "اقرأ المزيد" في قسم المدونة
    const readMoreButton = document.querySelector('.read-more');
    const blogContent = document.querySelector('.blog-content');
    
    if (readMoreButton && blogContent) {
        readMoreButton.addEventListener('click', function() {
            if (blogContent.style.display === 'none' || blogContent.style.display === '') {
                blogContent.style.display = 'block';
                readMoreButton.textContent = 'عرض أقل';
            } else {
                blogContent.style.display = 'none';
                readMoreButton.textContent = 'اقرأ المزيد';
            }
        });
    }

    // التعامل مع زر "اقرأ المزيد" في قسم "عن الموقع"
    const readMoreBtn = document.getElementById('readMoreBtn');
    const aboutText = document.getElementById('aboutText');
    
    if (readMoreBtn && aboutText) {
        readMoreBtn.addEventListener('click', function() {
            if (aboutText.style.maxHeight) {
                aboutText.style.maxHeight = null;
                readMoreBtn.textContent = 'اقرأ المزيد';
            } else {
                aboutText.style.maxHeight = aboutText.scrollHeight + 'px';
                readMoreBtn.textContent = 'اقطع القراءة';
            }
        });
    }

    // التفاعل مع عناصر الخدمة والمميزات
    const serviceBoxes = document.querySelectorAll('.service-box');
    if (serviceBoxes.length) {
        serviceBoxes.forEach(box => {
            box.addEventListener('click', function() {
                alert(`قمت بالنقر على: ${this.querySelector('h3').innerText}`);
            });
        });
    }

    const featureBoxes = document.querySelectorAll('.feature-box');
    if (featureBoxes.length) {
        featureBoxes.forEach(box => {
            box.addEventListener('click', function() {
                alert(`معلومات عن الميزة: ${this.querySelector('p').innerText}`);
            });
        });
    }

    // التعامل مع قائمة التنقل
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('open');
        });

        const links = document.querySelectorAll('.nav-links a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });
    }
});
