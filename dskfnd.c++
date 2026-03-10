#include <iostream>
using namespace std;
int main(){
    int n, fr[101];
    cin >> n;
    for(int i=1;i<=n;i++){
        int x;
        cin >> x;
        fr[x]++;
    }
for(int i=1;i<=n;i++)
if(fr[i]>0)
cout << i << "apare de" << fr[i] << "ori";
}