from module_test.test_package import *


radius = test_module.number_input()
print(test_module.get_circumfernce(radius))
print(test_module.get_circle_area(radius))

x, y = test_module2.number_input()
print(test_module2.number_input(x, y))
print(test_module2.get_circumference(x, y))


print("메인의 __name__ 출력")
print(__name__)
