import datetime
from time import strftime, strptime

from bson import ObjectId, json_util
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models import Func, F, Value
from django.http import HttpResponse
import json
from django.core import serializers
from django.shortcuts import render

# Create your views here.
from django.utils.formats import get_format

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
    ContentTitleData = serializers.serialize('json', list(ContentTitle.objects.all()))
    print(ContentTitleData)
    return HttpResponse(ContentTitleData)
