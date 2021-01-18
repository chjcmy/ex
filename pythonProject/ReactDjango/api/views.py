from bson import ObjectId

from django.http import HttpResponse
from django.core import serializers

from .models import ContentType, ContentTitle
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def ContentType_add_post(request):
    content = ContentType(type=request.POST.get("type"), subject=request.POST.get("name"), url=request.POST.get("url"))
    content.save()
    return HttpResponse("Inserted")


@csrf_exempt
def TitleContent_add_post(request):
    print(request.body)
    ContentTitles = ContentTitle(subject=request.POST.get("subject"), title=request.POST.get("title"),
                                 content=request.POST.get("content"))
    ContentTitles.save()
    return HttpResponse("Inserted")


@csrf_exempt
def update_post(request, id):
    model = ContentType.objects.get(_id=ObjectId(id))
    model.user_details['name'] = request.POST.get('name')
    model.save()
    return HttpResponse("Post Updated")


def delete_post(request, id):
    model = ContentType.objects.get(_id=ObjectId(id))
    model.delete()
    return HttpResponse("Post Deleted")


def read_post(request, id):
    model = ContentType.objects.get(_id=ObjectId(id))
    print(model)
    return HttpResponse(model)


def ContentType_read_post_all(request):
    contentData = serializers.serialize('json', list(ContentType.objects.all()))
    print(contentData)
    return HttpResponse(contentData)


def ContentTitle_read_post_all(request):
    print(ContentTitle.objects.values())
    ContentTitleData = serializers.serialize('json', list(ContentTitle.objects.all()))
    print(ContentTitleData)
    return HttpResponse(ContentTitleData)


def ContentType_read(request):
    id = request.GET["id"]

    SubjectContent = serializers.serialize('json', list(ContentTitle.objects.filter(_id=ObjectId(id))))
    print(SubjectContent)

    return HttpResponse(SubjectContent)
