from django.http import JsonResponse

def hello(request):
    message = "hello!"
    return JsonResponse({"message": message})
