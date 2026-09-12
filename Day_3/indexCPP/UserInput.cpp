#include <iostream>
using namespace std;

int main() {
    int num;

    // Keep receiving numbers
    while (cin >> num) {
        int result = num * num;

        cout << "Square = " << result << endl;
    }

    return 0;
}