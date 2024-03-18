from django.urls import path,include
urlpatterns=[
    path('category/',include('API.category.urls')),
    path('product/',include('API.product.urls')),
    path('user/',include('API.user.urls')),
    path('order/',include('API.order.urls')),
    path('payment/',include('API.payment.urls')),
]
