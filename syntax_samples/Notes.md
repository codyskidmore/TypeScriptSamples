The hardest part of this example was overcomming package configuration issues. It 
is possible that corruption occurred while switching branches but I am not completely 
sure.

When I started this sample, almost immediately I received errors like:

    "ERROR in Entry module not found: Error: Can't resolve 'ts-loader'"

The packages were installed in the global cache but webpack could not locate them. I 
resolved this by installing all the packages locally within the project.