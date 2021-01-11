todolsits = []
index = 1

while True:
    print("나만의 투두 리스트 만들기")
    print("1. 리스트 추가")
    print("2. 리스트 목록 보기")
    print("3. 리스트 정보수정")
    print("4.리스트 편집")
    menu = input("메뉴를 선택하세요")
    if menu == "1":
        name = input("리스트 이름 : ")
        age = input("날짜 : ")
        weather = input("날씨 : ")
        feel = input("느낀점 : ")
        setTodolist = {"id" : index, "name":name, "age":age, "weather":weather,"feel":feel}
        todolsits.append(setTodolist)
        print(setTodolist)
        index += 1
    elif menu == "2" :
        print(todolsits)
    elif menu == "3":
        id = input("수정할 리스트 번호를 입력 하시오")
        while id.isdecimal() :
            print("번호를 입력하시오")
            id = input("수정할 리스트 번호를 입력하시오")
        for setTodolist in todolsits :
            if setTodolist["id"] == id:
                modified = input("수정 할 메뉴를 선택하시오")
                if modified in setTodolist.keys() :
                    text = input("수정할 내용을 적으세요")
                    setTodolist[modified] = text
                    print("리스트의 {0}번 째 {1} 부분이 {2}로 수정 되었습니다").format(setTodolist["id"],modified,text)
    elif menu == "4" :
        id = input("삭제할 리스트 번호를 입력하시오")
        while id.isdecimal() :
            print("번호를 입려하세요")
            id = input("수정할 리스트 번호를 재입력하세요")
        for setTodolist in todolsits :
            if setTodolist["id"] == id:
                todolsits.remove(setTodolist)
                print("{0}번 리스트 항복이 삭제 되었습니다".format(setTodolist["id"]))

    elif menu == "0":
        print("종료합니다")
        break
