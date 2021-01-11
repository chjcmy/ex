students = []
index = 1

while True:
    print("===== Cloud MSA 반 수강생 관리 시스템 =====")
    print("1. 수강생 정보 등록")
    print("2.수강생 목록 보기")
    print("3.수강생 정보수정")
    print("4.수강생 정보 삭제")
    print("0. 종료")
    menu = input("메뉴를 선택하세요")
    if menu == "1":
        name = input("이름 : ")
        age = input("나이 : ")
        while not age.isdecimal():
            print("나이는 숫자로 입력해 주세요.")
            age = input("나이 : ")
        major = input("전공 : ")
        student = {"id": index, "name": name, "age": int(age), "major": major}
        students.append(student)
        print("{0}가 등록 되었습니다.".format(name))
        index += 1
    elif menu == "2":
        print(students)
    elif menu == "3":
        id = input("수정할 수강생 번호 : ")
        while id.isdecimal():
            print("수강생 번호는 숫자로 입력해 주세요.")
            id = input("수정할 수강생 번호 : ")
        major = input("수정할 전공 : ")
        for student in students:
            if student["id"] == id:
                student["major"] = major
                print("{0}의 전공 정보가 수정 되었습니다.".format(student["name"]))
    elif menu == "4":
        id = input("삭제할 수강생 번호 : ")
        while id.isdecimal():
            print("수강생 번호는 숫자로 입력해 주세요.")
            id = input("삭제할 수강생 번호 : ")
        major = input("삭제할 전공 : ")
        for student in students:
            if student["id"] == id:
                students.remove(student)
                print("{0}의 전공 정보가 삭제 되었습니다.".format(student["name"]))
    elif menu == "0":
        print("종료 합니다")
    break

