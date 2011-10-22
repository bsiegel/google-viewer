#!/bin/bash

PROJDIR=$(cd `dirname $0` && pwd)
PROJNAME=`basename $PROJDIR`
COMMITDATE=$(cd $PROJDIR && hg tip --template "{date|shortdate}")
XPIFILE=$(cd $PROJDIR && hg tip --template "$PROJNAME-rev{rev}-{node|short}.xpi")
BUILDDIR=$PROJDIR/builds/$COMMITDATE

mkdir -p $BUILDDIR
rm -f $BUILDDIR/$XPIFILE
cd $PROJDIR/src
zip -q -r $BUILDDIR/$XPIFILE . -x *.bak
