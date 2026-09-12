#include <iostream>
#include <vector>
#define g "\033[32m"
#define y "\033[33m"
#define reset "\033[0m"

using namespace std; 

int main(){
        for(int i = 1; i < 10; i++){
                cout <<y <<i <<" " <<reset;
        }
        
    return 0;
}